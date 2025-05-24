from fastapi import APIRouter, HTTPException
from datetime import datetime
import uuid
from db.database import post_group_to_db, post_groupmember_to_db
from models.group_model import GroupCreateRequest 

router = APIRouter()

@router.post("/groups")
def create_group(req: Group)