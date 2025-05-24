from fastapi import WebSocket
from typing import Dict

connected_clients: Dict[str, WebSocket] = {}

async def connect_user(email: str, websocket: WebSocket):
    await websocket.accept()
    connected_clients[email] = websocket
    print(f"✅ WebSocket接続: {email}")

async def disconnect_user(email: str):
    if email in connected_clients:
        del connected_clients[email]
        print(f"🔌 WebSocket切断: {email}")

async def notify_user(email: str, data: dict):
    websocket = connected_clients.get(email)
    if websocket:
        await websocket.send_json(data)
