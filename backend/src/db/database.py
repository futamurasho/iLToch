import sqlite3
from sqlite3 import IntegrityError
from models.email_model import Email, EmailUpdate
from models.friend_model import Friend,FriendUpdate
from typing import List
import os
from fastapi import HTTPException
from datetime import datetime
from typing import Dict



DB_PATH = "prisma/dev.db"

def send_emails_to_db(email: Email):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute(
            """
            INSERT INTO emails (id, userId, senderAddress, receiverAddress, content, gmailMessageId, receivedAt, subject, snippet, isRead, isNotified, createdAt, customLabel)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """ ,
            (
                email.id,
                email.userId,
                email.senderAddress,
                email.receiverAddress,
                email.content,
                email.gmailMessageId,
                email.receivedAt.strftime('%Y-%m-%d %H:%M:%S'),
                email.subject,
                email.snippet,
                email.isRead,
                email.isNotified,
                email.createdAt.strftime('%Y-%m-%d %H:%M:%S'),
                email.customLabel
            )
        )
        conn.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"登録に失敗しました: {str(e)}")
    finally:
        conn.close()
        

#ユーザ情報取得
def get_emails_from_db() -> List[Email]:
    print("=== DEBUG START ===")
    print(os.path.abspath(DB_PATH))
    print("=== DEBUG END ===")

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, userId, gmailMessageId, subject, senderAddress, receiverAddress, content, snippet, receivedAt, isRead, isNotified, customLabel, createdAt FROM emails"
    )
    rows = cursor.fetchall()
    conn.close()

    emails = []
    for row in rows:
        emails.append(
            Email(
                id=row[0],
                userId=row[1],
                gmailMessageId=row[2],
                subject=row[3],
                senderAddress=row[4],
                receiverAddress=row[5],
                content=row[6],
                snippet=row[7],
                receivedAt=row[8],
                isRead=bool(row[9]),
                isNotified=bool(row[10]),
                customLabel=row[11],
                createdAt=row[12],
            )
        )
    return emails

#メルアドからメール取得
def get_emails_by_email(email: str) -> List[Dict]:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        SELECT id, gmailMessageId, subject, senderAddress, receiverAddress,
               content, snippet, receivedAt, isRead, isNotified, customLabel, createdAt
        FROM emails
        WHERE receiverAddress = ?
        ORDER BY receivedAt DESC
    """, (email,))
    rows = cursor.fetchall()
    conn.close()

    emails = []
    for row in rows:
        emails.append({
            "id": row[0],
            "gmailMessageId": row[1],
            "subject": row[2],
            "senderAddress": row[3],
            "receiverAddress": row[4],
            "content": row[5],
            "snippet": row[6],
            "receivedAt": row[7],
            "isRead": bool(row[8]),
            "isNotified": bool(row[9]),
            "customLabel": row[10],
            "createdAt": row[11],
        })
    return emails




#ログイン済みかどうかの確認
def is_user_registered(user_id:str) -> bool:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT 1 FROM users WHERE email = ? LIMIT 1", (user_id,))
    exists = cursor.fetchone() is not None
    conn.close()
    return exists

#ユーザ情報の登録
def post_user_to_db(id: str,email:str, accessToken: str, refreshToken: str, tokenExpiry: datetime):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO users (id, email, accessToken, refreshToken,tokenExpiry)
        VALUES (?, ?, ?, ?, ?)
    """, (
        id,
        email,
        accessToken,
        refreshToken,
        tokenExpiry.isoformat(),
    ))
    conn.commit()
    conn.close()


#メールの保存
def post_email_to_db(email: Email)-> None:
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
                       INSERT OR IGNORE INTO emails (
                       id, userId, gmailMessageId, subject, senderAddress,receiverAddress, content, snippet,
                       receivedAt, isRead, isNotified, customLabel
                       )
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """, (
                        email.id,
                        email.userId,
                        email.gmailMessageId,
                        email.subject,
                        email.senderAddress,
                        email.receiverAddress,
                        email.content,
                        email.snippet,
                        email.receivedAt,
                        int(email.isRead),
                        int(email.isNotified),
                        email.customLabel
                        ))
        conn.commit()
        return cursor.rowcount > 0
    except Exception as e:
        print(f"❌ DB挿入エラー: {e}")
        return False
    finally:
        conn.close()
        print("post_email_to_db clear")

#フレンドをDBに登録
def post_friend_to_db(friend: Friend) -> None:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute(
            """
            INSERT INTO friends (id, userId, emailAddress, name, createdAt, customLabel)
            VALUES (?, ?, ?, ?, ?, ?)
            """ ,
            (
                friend.id,
                friend.userId,
                friend.emailAddress,
                friend.name,
                friend.createdAt.strftime('%Y-%m-%d %H:%M:%S'),
                friend.customLabel
            )
        )
        conn.commit()
    except IntegrityError as e:
    # UNIQUE制約違反の場合に 409 Conflict を返す
        raise HTTPException(status_code=409, detail="既に登録済みです")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"登録に失敗しました: {str(e)}")
    finally:
        conn.close()
        print("post_friend_to_db clear")

#フレンド取得
def get_friend_from_db() -> List[Friend]:

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, userId, emailAddress, name, createdAt, customLabel FROM friends"
    )
    rows = cursor.fetchall()
    conn.close()

    friends = []
    for row in rows:
        friends.append(
            Friend(
                id=row[0],
                userId=row[1],
                emailAddress=row[2],
                name=row[3],
                createdAt=row[4],
                customLabel=row[5],
            )
        )
    
    return friends

def patch_friend_to_name(friend_id: str , req: FriendUpdate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    print(friend_id)
    print(req.name)
    try:
        cursor.execute(
            "UPDATE friends SET name = ? WHERE id = ?",
            (req.name, friend_id)
        )
        conn.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Friend not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        conn.close()
    return {"message": "Friend name updated successfully"}

def patch_email_to_isread(email_id: str ):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute(
            "UPDATE emails SET isRead = true WHERE id = ?",
            (email_id,)
        )
        conn.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Email not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")
    finally:
        conn.close()
    return {"message": "Email isRead updated successfully"}

#ユーザ一覧取得
def get_all_users():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT id, email, accessToken, refreshToken, tokenExpiry FROM users")
    users = cursor.fetchall()
    conn.close()

    user_list = []
    for row in users:
        user_list.append({
            "id": row[0],
            "email": row[1],
            "access_token": row[2],
            "refresh_token": row[3],
            "token_expiry": row[4]
        })
    return user_list

#トークン更新時にDBに保存
def update_user_token(user_id: str, access_token: str, token_expiry: datetime):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE users
        SET accessToken = ?, tokenExpiry = ?
        WHERE id = ?
    """, (access_token, token_expiry.isoformat(), user_id))
    conn.commit()
    conn.close()

#
def patch_email_to_notified(email_id: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute(
            "UPDATE emails SET isNotified = true WHERE id = ?",
            (email_id,)
        )
        conn.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Email not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"通知フラグ更新失敗: {str(e)}")
    finally:
        conn.close()
    return {"message": "Email isNotified updated successfully"}
