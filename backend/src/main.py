from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from gmail_controllers.gmail_sender import send_email
from api import emails, friends,groups, chatGPT
import uvicorn
import asyncio
from gmail_controllers.gmail_worker import fetch_and_store_for_all_users
from ws_server import connect_user, disconnect_user

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
app.include_router(chatGPT.router, prefix="/api", tags=["chatGPT"])
app.include_router(groups.router, prefix="/api", tags=["group"])

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

#定期確認・DB保存
@app.on_event("startup")
async def start_polling():
    import asyncio
    async def loop():
        while True:
            fetch_and_store_for_all_users(client_id="668233619733-ef89kt18l34kcigb4ik2r7fm9u9d80m6.apps.googleusercontent.com", client_secret="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")
            await asyncio.sleep(10) #60秒ごとに確認・保存
    asyncio.create_task(loop())

#WebSocket エンドポイント
@app.websocket("/ws/{email}")
async def websocket_endpoint(websocket: WebSocket, email: str):
    await connect_user(email, websocket)
    try:
        while True:
            await websocket.receive_text()  # keep-alive
    except WebSocketDisconnect:
        await disconnect_user(email)

#
#uvicorn main:app --reload
