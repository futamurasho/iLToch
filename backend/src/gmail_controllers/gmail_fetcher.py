import base64
import os.path
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from apiclient import errors
from datetime import datetime

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

# 添付ファイルの保存（必要なら残す）
def save_attachments(service, message_id, parts, save_dir="."):
    for part in parts:
        if part.get("filename"):
            filename = part["filename"]
            body = part["body"]
            if "attachmentId" in body:
                attachment_id = body["attachmentId"]
                attachment = service.users().messages().attachments().get(
                    userId="me", messageId=message_id, id=attachment_id
                ).execute()

                file_data = base64.urlsafe_b64decode(attachment["data"])
                filepath = os.path.join(save_dir, filename)
                with open(filepath, "wb") as f:
                    f.write(file_data)
                print(f"Saved attachment: {filename}")
        if "parts" in part:
            save_attachments(service, message_id, part["parts"], save_dir)


def get_gmail_service(access_token):
    creds = Credentials(token=access_token)
    return build('gmail', 'v1', credentials=creds)

def fetch_message_list(service, user_id="me", query="in:inbox is:unread", count=10):
    messages = []
    try:
        message_ids = service.users().messages().list(
            userId=user_id, maxResults=count, q=query
        ).execute()

        if message_ids.get("resultSizeEstimate", 0) == 0:
            return []

        for message_id in message_ids["messages"]:
            detail = service.users().messages().get(userId="me", id=message_id["id"]).execute()
            payload = detail["payload"]

            message = {
                "id": message_id["id"],
                "body": "",
                "html_body":"",
                "subject": "",
                "sender": "",
                "content": "",
                "snippet": detail.get("snippet", ""),
                "received_at": datetime.fromtimestamp(int(detail.get("internalDate", "0")) / 1000).isoformat()
            }

             # 本文の抽出
            body_data = payload.get("body", {}).get("data")
            mime_type = payload.get("mimeType", "")

            # 単一パートの場合
            if body_data:
                decoded = base64.urlsafe_b64decode(body_data).decode("utf-8", errors="replace")
                if mime_type == "text/html":
                    message["html_body"] = decoded
                else:
                    message["body"] = decoded
            # マルチパートの場合
            elif mime_type.startswith("multipart/") and "parts" in payload:
                for part in payload["parts"]:
                    part_mime = part.get("mimeType")
                    data = part.get("body", {}).get("data")
                    if not data:
                        continue
                    decoded = base64.urlsafe_b64decode(data).decode("utf-8", errors="replace")

                    if part_mime == "text/html":
                        message["html_body"] = decoded
                    elif part_mime == "text/plain" and not message["body"]:
                        message["body"] = decoded


            # if 'data' in payload.get('body', {}):
            #     decoded_bytes = base64.urlsafe_b64decode(payload["body"]["data"])
            #     message["body"] = decoded_bytes.decode("UTF-8")
            # else:
            #     # パート構造になってる場合（HTML/プレーン両方あるなど）
            #     #text/plain の本文だけを拾って使う
            #     #のちにhtmlに対応させる改良ができる
            #     parts = payload.get("parts", [])
            #     for part in parts:
            #         if part.get("mimeType") == "text/plain" and 'data' in part.get("body", {}):
            #             decoded_bytes = base64.urlsafe_b64decode(part["body"]["data"])
            #             message["body"] = decoded_bytes.decode("UTF-8")
            #             break  # 最初のプレーンテキストで十分
            
            #ヘッダー（Subject, From, To など）
            for header in payload.get("headers", []):
                name = header["name"]
                if name == "Subject":
                    message["subject"] = header["value"]
                elif name == "From":
                    message["sender"] = header["value"]
                elif name == "To":
                    message["content"] = header["value"]

            # 添付保存は必要に応じて
            if "parts" in payload:
                save_attachments(service, message_id["id"], payload["parts"])

            messages.append(message)
        return messages

    except errors.HttpError as error:
        print("An error occurred: %s" % error)
        return []
