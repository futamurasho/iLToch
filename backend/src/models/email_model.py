from pydantic import BaseModel
import sqlite3
from typing import Optional
from datetime import datetime

class Email(BaseModel):
    id: str
    userId: str
    gmailMessageId: str
    subject: Optional[str]
    senderAddress: str  
    receiverAddress:str
    content: str
    snippet: Optional[str]
    receivedAt: Optional[datetime]
    isRead: bool
    isNotified: bool
    createdAt: datetime
    customLabel: Optional[str]