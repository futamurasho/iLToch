# iLToch

メールをチャットで管理する Web アプリ

## ディレクトリ構成

```
.
├── README.md
├── docker-compose.yml
├── backend
└── frontend
```

## 環境起動

## backend:http://localhost:8080/

## frontend:http://localhost:3000/

`docker-compose up -d`
でフロント、バックともに環境起動

`docker-compose up -d backend`
でバックエンドのみ

`docker-compose up -d frontend`
でフロントエンドのみ起動

`docker-compose stop`
で停止

ビルドし直す際は
`docker-compose down --volumes `
`docker-compose build --no-cache`

localDB リセットは backend/src で
`npx prisma migrate reset`

localDB の中身確認は backend/src で
`npx prisma studio`
