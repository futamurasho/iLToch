from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from datetime import datetime
import uuid
from db.database import post_group_to_db
from models.group_model import GroupCreateRequest 

router = APIRouter()


class GroupCreateRequest(BaseModel):
    userId: str
    name: str
    friendIds: List[str]

@router.post("/group")
def create_group(data: GroupCreateRequest):
    group_id = post_group_to_db(data.userId, data.name, data.friendIds)
    return {"success": True, "groupId": group_id}