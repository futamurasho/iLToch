from models.ChatGPT import ChatMessage
from fastapi import APIRouter, HTTPException
import openai
import os
from dotenv import load_dotenv




# ← これで出るはず



router = APIRouter()

@router.post("/rewrite-email")
async def rewrite_email(chat: ChatMessage):
    load_dotenv()  # .env を読み込む
    openai.api_key = os.getenv("OPENAI_API_KEY")
    print(openai.api_key)

    user_input = chat.message
    prompt = f"""
以下のカジュアルな文章を、ビジネスメールとして丁寧な文章に添削してください。
また、文章の内容から適切な件名を推測し、「件名」と「本文」に分けて日本語で出力してください。

---
カジュアルな文章：
「{user_input}」

出力形式：
件名: [ここに件名]
本文:
[ここに本文]
    """

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"roll": "system", "content": "あなたはビジネスメールを丁寧に添削するアシスタントです"},
                {"roll": "user", "content": prompt}
            ],
            temperature=0.7
        )

        content = response.choices[0].message["content"]

        lines = content.splitlines()
        subject = ""
        body_lines = []
        is_body = False

        for line in lines:
            if line.startswith("件名:"):
                subject = line.replace("件名:", "").strip()
            elif line.startswith("本文:"):
                is_body = Ture
            elif is_body:
                body_lines.append(line)
        body = "\n".join(body_lines).strip()

        return {
            "subject": subject,
            "body": body
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))