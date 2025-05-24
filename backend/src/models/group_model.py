from pydantic import BaseModel
from typing import List
from datetime import datetime

class Group(BaseModel):
    id: str
    userId: str
    name: str
    createdAt: datetime

class GroupCreateRequest(BaseModel):
    userId: str
    name: str
    friendIds: List[str]
