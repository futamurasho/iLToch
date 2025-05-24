import uuid
from datetime import datetime
from models.email_model import Email
from gmail_controllers.gmail_fetcher import get_gmail_service, fetch_message_list
from db.database import get_all_users, post_email_to_db, update_user_token, patch_email_to_notified
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from gmail_controllers.gmail_fetcher import fetch_message_list
from ws_server import notify_user
import asyncio

def load_token():
    SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']
    creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    return creds.token

def fetch_and_store_for_all_users(client_id: str, client_secret: str):
    users = get_all_users()

    for user in users:
        print(f"📬 ユーザー: {user['email']} のメールをチェック中...")
        creds = Credentials(
            token=user["access_token"],
            refresh_token=user["refresh_token"],
            token_uri="https://oauth2.googleapis.com/token",
            client_id=client_id,
            client_secret=client_secret,
            scopes=['https://mail.google.com/']
        )

        # トークンが期限切れならリフレッシュ
        if not creds.valid and creds.refresh_token:
            try:
                creds.refresh(Request())
                print(f"🔄 トークン更新: {user['email']}")
                update_user_token(user["id"], creds.token, creds.expiry)
            except Exception as e:
                print(f"❌ トークン更新失敗: {user['email']} - {e}")
                continue

        service = build('gmail', 'v1', credentials=creds)
        messages = fetch_message_list(service)

        for msg in messages:
            email = Email(
                id=str(uuid.uuid4()),
                userId=user["id"],
                gmailMessageId=msg["id"],
                subject=msg.get("subject"),
                senderAddress=msg.get("sender"),
                receiverAddress=msg.get("content"),
                content=msg.get("body"),
                snippet=msg.get("snippet"),
                receivedAt=msg.get("received_at"),
                isRead=False,
                isNotified=False,
                customLabel=None,
                createdAt=datetime.now()
            )
            inserted = post_email_to_db(email)
            if inserted:
                try:
                    print("📩 通知対象メール:", email.subject)
                    asyncio.create_task(notify_user(user["email"], {
                        "subject": email.subject,
                        "from": email.senderAddress,
                        "receivedAt": email.receivedAt.isoformat(),
                        "snippet": email.snippet
                    }))
                    patch_email_to_notified(email.id)
                except Exception as e:
                    print(f"通知失敗: {e}")
