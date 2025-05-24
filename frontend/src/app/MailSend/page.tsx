"use client";

import { useState, FormEvent, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function MailSend() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession(); // ← 追加
  const user = session?.user;
  const router = useRouter()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const accessToken = session?.accessToken;
    if (!accessToken) {
      alert("ログインしていません！");
      return;
    } else {
      console.log(JSON.stringify({ to, subject, body, accessToken, user }));
    }
    await fetch("http://localhost:8080/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, body, accessToken, user }),
    });

    console.log("送信！", { to, subject, body, accessToken, user });
  };
  useEffect(() => {
    const chatGPTHandler = async (email: string, name:string) => {
      setLoading(true)
      const res = await fetch("http://localhost:8080/api/rewrite-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: email, name }),
      });

      if (!res.ok) {
        console.error("添削失敗");
        return;
      }

      const data = await res.json(); // { subject: string, body: string }
      const { subject, body } = data;
      console.log(subject, body);

      setSubject(subject);
      setBody(body);
      setLoading(false)
    };

    const email = sessionStorage.getItem("email") || "";
    const emailAddress = sessionStorage.getItem("emailAddress") || "";
    const name = sessionStorage.getItem("name") || "";
    console.log(email);
    console.log(emailAddress);
    setTo(emailAddress);
    // chatGPTHandler(email, name);
    // stateにセットするなど
  }, []);

  return (
    <Card className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
      <h2 className="text-2xl font-bold mb-6">📧 メール送信フォーム</h2>
      <Button className="text-red-500 text-3xl  hover:text-red-500"
      variant="ghost"
      onClick={() => router.push("/ChatScreen")}>×</Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">宛先（To）</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="example@example.com"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">件名（Subject）</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={cn(loading ? "生成中...." :"件名を入力")}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">本文（Body）</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={cn(loading ? "生成中...." :"本文を入力")}
            rows={6}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <Button
          type="submit"
          variant="default"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          onClick={() => router.push("/ChatScreen")}>
          送信
        </Button>
      </form>
    </Card>
  );
}


