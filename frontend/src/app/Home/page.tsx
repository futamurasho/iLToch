'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-purple-100">
      {/* 上部バー */}
      <header className="bg-black h-14 flex items-center px-6 shadow-md">
        <h1 className="text-white text-xl font-bold">Chat App</h1>
      </header>

      {/* メインコンテンツ */}
      <main className="flex flex-grow items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-gray-200">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/icon1.png"
              alt="アプリアイコン"
              className="h-36 w-36"
            />
            <h1 className="text-3xl font-extrabold text-gray-800">なんかアプリの大雑把な説明</h1>
            <p className="text-gray-500">
              アプリの説明の細かいやつaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>

          <div className="mt-8 flex flex-col space-y-4">
            <Button
              onClick={() => router.push('/Register')}
              className="w-full text-lg bg-black text-white hover:bg-gray-900"
            >
              新規登録
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/Login')}
              className="w-full text-lg text-black border-black hover:bg-gray-100"
            >
              ログイン
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
