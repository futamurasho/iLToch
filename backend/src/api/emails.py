from fastapi import APIRouter
from typing import List
from models.email_model import Email
from db.database import get_emails_from_db  # DBからの取得関数

router = APIRouter()

@router.get("/email",  response_model=List[Email])
def read_emails():
    return get_emails_from_db()

