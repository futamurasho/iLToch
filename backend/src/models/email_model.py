from pydantic import BaseModel
import sqlite3
from typing import Optional
from datetime import datetime

class EmailCreate(BaseModel):
    userId: str
    gmailMessageId: str
    subject: Optional[str]
    senderAddress: str  
    receiverAddress:str
    content: str
    html_content: str
    gmailMessageId: str
    receivedAt: Optional[datetime]
    subject: Optional[str]
    snippet: Optional[str]
    customLabel: Optional[str]

class Email(EmailCreate):
    id: str
    isRead: bool
    isNotified: bool
    createdAt: datetime

class EmailUpdate(BaseModel):
    isRead: bool