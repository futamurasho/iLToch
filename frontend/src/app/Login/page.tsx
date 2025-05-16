"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/ChatScreen"; // 2⃣

  const handleLogin = () => {
    // 本物のログイン機能はここに追加します
    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () => {
    // Google OAuthの開始
    signIn("google", { callbackUrl, prompt: "consent" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ログイン</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button type="button" className="w-full" onClick={handleLogin}>
            ログイン
          </Button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-2">または</p>
            <Button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Googleでログイン
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
