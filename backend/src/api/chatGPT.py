from models.ChatGPT import ChatMessage
from fastapi import APIRouter, HTTPException
from openai import OpenAI
import os
from dotenv import load_dotenv
from pathlib import Path



# ← これで出るはず
dotenv_path = "../.env"
print(dotenv_path)
load_dotenv(dotenv_path)  # .env を読み込む

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
# print(os.environ["OPENAI_API_KEY"])
print(os.getenv("OPENAI_API_KEY"))

router = APIRouter()

@router.post("/rewrite-email")
async def rewrite_email(chat: ChatMessage):
    # env_path = Path(__file__).resolve().parents[1] / '.env'
    print(os.getenv("OPENAI_API_KEY"))

    user_input = chat.message
    name = chat.name

    prompt = f"""
以下のカジュアルな文章を、ビジネスメールとして丁寧な文章に添削してください。
また、文章の内容から適切な件名を推測し、「件名」と「本文」に分けて日本語で出力してください。
また、本文の最初には送信相手の名前から〇〇様と書いてください。正しい名前が書けなさそうな時は名前を入力してくださいとしてください。

---
カジュアルな文章：
「{user_input}」
送信相手:
「{name}」

出力形式：
件名: [ここに件名]
本文:
[ここに本文]
    """

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "あなたはビジネスメールを丁寧に添削するアシスタントです"},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )

        content = response.choices[0].message.content

        lines = content.splitlines()
        subject = ""
        body_lines = []
        is_body = False

        for line in lines:
            if line.startswith("件名:"):
                subject = line.replace("件名:", "").strip()
            elif line.startswith("本文:"):
                is_body = True
            elif is_body:
                body_lines.append(line)
        body = "\n".join(body_lines).strip()

        return {
            "subject": subject,
            "body": body
        }
    except Exception as e:
        print("エラー内容:", e) 
        raise HTTPException(status_code=500, detail=str(e))