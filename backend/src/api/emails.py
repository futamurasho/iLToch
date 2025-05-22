from fastapi import APIRouter,HTTPException
from pydantic import BaseModel
from typing import List
from models.email_model import Email
from models.friend_model import Friend
from db.database import get_emails_from_db, is_user_registered, post_email_to_db, post_friend_to_db,post_user_to_db,get_emails_by_email, get_friend_from_db, patch_email_to_isread# DBからの取得関数
from gmail_controllers.gmail_fetcher import get_gmail_service, fetch_message_list
from datetime import datetime
import uuid
import re
from typing import Tuple
router = APIRouter()

#型アクセストークンとuserID(Gmailアドレス)
class EmailFetchRequest(BaseModel):
    email: str
    accessToken: str
    refreshToken: str
    tokenExpiry: str
    userId: str


#名前とメールアドレス抽出
def parse_sender(raw_sender: str) -> Tuple[str, str]:
    """
    メールのFrom文字列を解析して、(表示名, メールアドレス) を返す。
    例: '"外資就活ドットコム" <news@gaishishukatsu.com>' → ('外資就活ドットコム', 'news@gaishishukatsu.com')
    """
    match = re.match(r'"?([^"<]+?)"?\s*<([^<>]+)>', raw_sender)
    if match:
        name = match.group(1).strip()
        address = match.group(2).strip()
        return name, address
    else:
        # 表示名なし、メールアドレスのみのケース
        return "", raw_sender.strip()

@router.post("/get-emails")
def get_emails(req: EmailFetchRequest):
    user_email=req.email
    #有効期限をdatetimeに
    expiry_dt = datetime.fromisoformat(req.tokenExpiry.replace("Z", "+00:00"))
    # Gmail APIからメールを10件取得する処理
    #DBに登録済みかどうかを確認する
    is_registered=is_user_registered(user_email)
    #DBに登録していなかった場合
    if not is_registered:
        #SQLITE経由だとprismaに挿入する際には、乱数を挿入しておく必要がある(INSERT文でuseridを抜くことができない)
        userid_created=str(uuid.uuid4())
        #ユーザDBに情報を登録
        post_user_to_db(
            id=req.userId,
            email=user_email,
            accessToken=req.accessToken,
            refreshToken=req.refreshToken,
            tokenExpiry=expiry_dt
        )
        #アクセストークンから最新のメールを10件取得
        service = get_gmail_service(req.accessToken)
        fetched_emails = fetch_message_list(service, user_id="me", query="is:unread", count=10)
        #取得したメールをDBに保存+取得したメールの送信主をfriendに登録
        friend_list= []
        for email_data in fetched_emails:
            #frinedの名前、アドレス取得
            friend_name, friend_email = parse_sender((email_data.get("sender", "")))
            email_obj = Email(
                id=str(uuid.uuid4()),#乱数
                userId=req.userId,
                gmailMessageId=email_data["id"],
                subject=email_data.get("subject", ""),
                senderAddress=friend_email,
                receiverAddress=user_email,
                content=email_data.get("body", ""),
                snippet=email_data.get("snippet", ""),
                receivedAt=email_data.get("received_at", None),
                isRead=False,
                isNotified=False,
                customLabel=None,
                createdAt=datetime.now().isoformat(),
            )
            try:
                post_email_to_db(email_obj)
            except Exception as e:
                print(f"メール保存失敗: {e}")  # 重複など
            # 3. 差出人をFriendとして登録
            friend = Friend(
                id=str(uuid.uuid4()), # 乱数
                userId=req.userId,#useridと同一
                emailAddress=email_obj.senderAddress,
                name=friend_name,
                createdAt=datetime.now().isoformat(),
                customLabel=None
            )
            
            try:
                post_friend_to_db(friend)
                friend_list.append(friend)
            except HTTPException as e:
                if e.status_code == 409:
                    pass  # 既に登録済みなら無視
                else:
                    raise e
    #メールをDBから取得(ユーザが送信したメール、受信したメール全て)
    # メールアドレスからメールを直接取得
    emails = get_emails_by_email(user_email)
    friend = get_friend_from_db()
    return {"emails": emails, "friends": friend}
@router.patch("/emails/{email_id}")
def patch_emails(email_id: str):
    return patch_email_to_isread(email_id)