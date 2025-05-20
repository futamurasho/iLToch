from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from gmail_sender import send_email
from api import emails, friends
import uvicorn


app = FastAPI()

# React（http://localhost:5173）からのリクエストを許可
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(emails.router, prefix="/api", tags=["email"])
app.include_router(friends.router, prefix="/api", tags=["friend"])

# メール送信用のリクエスト形式
class EmailRequest(BaseModel):
    to: str
    subject: str
    body: str
    accessToken: str
    user: object

#テスト
@app.get("/")
def root():
    return {"message": "Hello, FastAPI in Docker!"}

# メール送信エンドポイント
@app.post("/send")
def send(email: EmailRequest):
    send_email(email.to, email.subject, email.body, email.accessToken, email.user)
    return {"message": "メール送信完了"}

#
#uvicorn main:app --reload
