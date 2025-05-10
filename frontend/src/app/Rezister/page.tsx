'use client';

import React, { useState } from 'react';

export default function Rezister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const clickHandler = () => {
    setEmail('')
    setPassword('')
  }
  return (
    <div>
      <h2>アカウント登録</h2>
      <form>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button onClick={clickHandler}>登録</button>
      </form>
    </div>
  );
}
