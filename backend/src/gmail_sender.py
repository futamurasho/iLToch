from googleapiclient.discovery import build
from email.message import EmailMessage
import base64
import os
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
import json
from db.database import send_emails_to_db
from datetime import datetime
from models.email_model import Email
import uuid

SCOPES = ['https://mail.google.com/']

def get_token():
    creds = None
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    else:
        raise Exception("token.json が存在しません。先に認証を通してください。")
    
    if not creds.valid:
        if creds.expired and creds.refresh_token:
            creds.refresh(Request())
            with open("token.json", "w") as f:
                f.write(creds.to_json())
        else:
            raise Exception("認証情報が無効です。再認証が必要です。")

    return creds

def send_email(to, subject, body_text,access_token, user):
    # 1. アクセストークンから Credentials を直接作成
    creds = Credentials(token=access_token, scopes=SCOPES)
    # creds = get_token()
    service = build("gmail", "v1", credentials=creds)

    message = EmailMessage()
    message["To"] = to
    message["From"] = "me"  # 認証済みのアドレスに合わせて書き換えてください
    message["Subject"] = subject
    message.set_content(body_text)

    encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
    create_message = {"raw": encoded_message}

    send_message = service.users().messages().send(userId="me", body=create_message).execute()
    print(f"Message sent. ID: {send_message['id']}")
    gmail_message_id = send_message["id"]
    now = datetime.now()
    print("DEBUG==============")
    print(user)
    email = Email(
        id=str(uuid.uuid4()),
        userId="me",  #本当はsession user
        senderAddress=user["email"], #本当はsession userのmailaddress
        receiverAddress=to,  # GmailのFromアドレスを取得する場合は別途取得可能
        content=body_text,
        gmailMessageId=gmail_message_id,
        receivedAt=now,
        subject=subject,
        snippet=body_text[:100],  # 冒頭部分
        isRead=True,
        isNotified=False,
        createdAt=now,
        customLabel="sent"
    )
    send_emails_to_db(email)