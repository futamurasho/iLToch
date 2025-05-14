'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-6">
        {/* メールアイコンの SVG */}
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-800">便利なメールアプリ</h1>
        <p className="text-gray-600">アプリの説明</p>

        <div className="space-x-4">
          <Button onClick={() => router.push('/Register')}>新規登録</Button>
          <Button variant="outline" onClick={() => router.push('/Login')}>
            ログイン
          </Button>
        </div>
      </div>
    </div>
  );
}
