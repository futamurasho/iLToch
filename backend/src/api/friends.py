from fastapi import APIRouter
from models.friend_model import Friend, FriendCreate
from db.database import post_friend_to_db
from datetime import datetime
import uuid

router = APIRouter()

@router.post("/friend")
def register_friend(friend_create: FriendCreate):
    print("呼ばれた！")
    print(friend_create)
    new_friend = Friend(
        id=str(uuid.uuid4()),
        userId=friend_create.userId,
        sender=friend_create.sender,
        name=friend_create.name,
        createdAt=datetime.now(),
        customLabel=friend_create.customLabel,
    )
    print(new_friend)
    post_friend_to_db(new_friend)
    return {"message": "Friend registerd successfully"}