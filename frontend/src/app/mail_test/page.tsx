"use client";

import { useState, FormEvent } from "react";
import { useSession } from "next-auth/react";

function App() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const { data: session } = useSession(); // ← 追加
  const user = session?.user
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

    console.log("送信！", { to, subject, body, accessToken, user});
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">📧 メール送信フォーム</h2>
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
            placeholder="件名を入力"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">本文（Body）</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="本文を入力"
            rows={6}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          送信
        </button>
      </form>
    </div>
  );
}

export default App;
