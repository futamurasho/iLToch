# frontend/Dockerfile
FROM node:20-slim

WORKDIR /workspace/frontend

# package.json だけ先にコピーして依存だけ先にインストール（キャッシュ効率UP）
COPY package*.json ./

# 依存ライブラリのインストール
RUN npm install

# ソースコード全体をコピー（volumeでマウントされるのでなくてもOKだが念のため）
COPY . .

CMD ["npm", "run", "dev"]
