from pydantic import BaseModel
import sqlite3


class ChatMessage(BaseModel):
    message: str
    name: str