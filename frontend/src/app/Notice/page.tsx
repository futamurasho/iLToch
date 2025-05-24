'use client';

import { useEffect, useRef, useState } from 'react';

export default function NoticePage() {
  const email = "qingxiangzhuwei@gmail.com";
  const socketRef = useRef<WebSocket | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    if (!email) return;

    const connect = () => {
      const socket = new WebSocket(`ws://localhost:8000/ws/${email}`);
      socketRef.current = socket;

      socket.onopen = () => {
        console.log("✅ WebSocket 接続成功");

        const ping = setInterval(() => {
          if (socket.readyState === WebSocket.OPEN) {
            socket.send("ping");
          }
        }, 10000);

        socket.onclose = () => {
          console.log("🔌 WebSocket 切断 → 再接続を試みます");
          clearInterval(ping);
          setTimeout(connect, 3000);
        };
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("📩 通知:", data);
        setNotifications((prev) => [...prev, data]);
      };

      socket.onerror = (err) => {
        console.error("❌ WebSocket エラー:", err);
      };
    };

    connect();

    return () => {
      socketRef.current?.close();
    };
  }, [email]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">📨 通知一覧</h1>
      {notifications.length === 0 && <p>通知はまだありません</p>}
      {notifications.map((n, i) => (
        <div key={i} className="p-2 border rounded my-2">
          <p><strong>件名:</strong> {n.subject}</p>
          <p><strong>差出人:</strong> {n.from}</p>
          <p><strong>受信日時:</strong> {n.receivedAt}</p>
          <p><strong>スニペット:</strong> {n.snippet}</p>
        </div>
      ))}
    </div>
  );
}
