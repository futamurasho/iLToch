import sqlite3
from models.email_model import Email
from models.friend_model import Friend
from typing import List
import os




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
            """ (
                friend.id,
                friend.userId,
                friend.sender,
                friend.name,
                friend.createdAt,
                friend.customLabel
            )
        )
        conn.commit()
        conn.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"登録に失敗しました: {str(e)}")