'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MessageSquareText } from 'lucide-react' // Lucideのアイコン使用

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-gray-200">
        <div className="flex flex-col items-center space-y-4">
          <MessageSquareText className="h-16 w-16 text-blue-600" />
          <h1 className="text-3xl font-extrabold text-gray-800">メールアプリ</h1>
          <p className="text-gray-500">アプリの説明aaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>

        <div className="mt-8 flex flex-col space-y-4">
          <Button onClick={() => router.push('/Register')} className="w-full text-lg">
            新規登録
          </Button>
          <Button variant="outline" onClick={() => router.push('/Login')} className="w-full text-lg">
            ログイン
          </Button>
        </div>
      </div>
    </div>
  )
}
