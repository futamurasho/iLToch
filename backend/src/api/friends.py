from fastapi import APIRouter
from models.friend_model import Friend, FriendCreate, FriendUpdate
from db.database import post_friend_to_db, get_friend_from_db, patch_friend_to_name
from datetime import datetime
import uuid
from typing import List

router = APIRouter()

@router.post("/friend")
def register_friend(friend_create: FriendCreate):
    print("呼ばれた！")
    print(friend_create)
    new_friend = Friend(
        id=str(uuid.uuid4()),
        userId=friend_create.userId,
        emailAddress=friend_create.emailAddress,
        name=friend_create.name,
        createdAt=datetime.now(),
        customLabel=friend_create.customLabel,
    )
    print(new_friend)
    post_friend_to_db(new_friend)
    return {"message": "Friend registerd successfully"}

@router.get("/friend", response_model=List[Friend])
def get_frined(userId: str):
    return get_friend_from_db(userId)

@router.patch("/friend/{friend_id}")
def update_friend(friend_id: str, req: FriendUpdate):
    return patch_friend_to_name(friend_id, req)