import sqlite3
from sqlite3 import IntegrityError
from models.email_model import Email
from models.friend_model import Friend
from typing import List
import os
from fastapi import HTTPException




DB_PATH = "prisma/dev.db"


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