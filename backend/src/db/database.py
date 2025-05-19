import sqlite3
from sqlite3 import IntegrityError
from models.email_model import Email
from models.friend_model import Friend
from typing import List
import os
from fastapi import HTTPException
from datetime import datetime
from typing import Dict



DB_PATH = "prisma/dev.db"

#ユーザ情報取得
def get_emails_from_db() -> List[Email]:
    print("=== DEBUG START ===")
    print(os.path.abspath(DB_PATH))
    print("=== DEBUG END ===")

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, userId, gmailMessageId, subject, sender, content, snippet, receivedAt, isRead, isNotified, customLabel, createdAt FROM emails"
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
                sender=row[4],
                content=row[5],
                snippet=row[6],
                receivedAt=row[7],
                isRead=bool(row[8]),
                isNotified=bool(row[9]),
                customLabel=row[10],
                createdAt=row[11],
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
    conn.close()
    print("post_email_to_db clear")

#フレンドをDBに登録
def post_friend_to_db(friend: Friend) -> None:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute(
            """
            INSERT INTO friends (id, userId, sender, name, createdAt, customLabel)
            VALUES (?, ?, ?, ?, ?, ?)
            """ ,
            (
                friend.id,
                friend.userId,
                friend.sender,
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
        "SELECT id, userId, sender, name, createdAt, customLabel FROM friends"
    )
    rows = cursor.fetchall()
    conn.close()

    friends = []
    for row in rows:
        friends.append(
            Friend(
                id=row[0],
                userId=row[1],
                sender=row[2],
                name=row[3],
                createdAt=row[4],
                customLabel=row[5],
            )
        )
    
    return friends
