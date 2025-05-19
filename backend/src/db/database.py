import sqlite3
from sqlite3 import IntegrityError
from models.email_model import Email
from models.friend_model import Friend
from typing import List
import os
from fastapi import HTTPException




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