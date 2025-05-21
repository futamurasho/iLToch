from pydantic import BaseModel
import sqlite3
from typing import  Optional
from datetime import datetime

class FriendUpdate(BaseModel):
    name: Optional[str] = None

class FriendCreate(BaseModel):
    userId: str
    emailAddress: str 
    name: Optional[str] = None
    customLabel: Optional[str] = None
class Friend(FriendCreate):
    id: str
    createdAt: datetime
    
