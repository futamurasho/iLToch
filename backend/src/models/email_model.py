from pydantic import BaseModel, Field
import sqlite3
from typing import List, Optional
from datetime import datetime

class Email(BaseModel):
    id: int
    userId: int
    gmailMessageId: str
    subject: Optional[str]
    from_: Optional[str] = Field(None, alias="from")  #from予約後につき_追加
    content: str
    snippet: Optional[str]
    receivedAt: Optional[datetime]
    isRead: bool
    isNotified: bool
    customLabel: Optional[str]
    createdAt: datetime