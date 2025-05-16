// components/FriendSearch.tsx
"use client";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface FriendSearchProps {
  userList: { id: number; name: string }[];
  onFilter: (filtered: { id: number; name: string }[]) => void;
}

export default function FriendSearch({ userList, onFilter }: FriendSearchProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filtered = userList.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    onFilter(filtered);
  }, [query, userList, onFilter]);

  return (
    <div className="mb-2">
      <Input
        type="text"
        placeholder="フレンドを検索"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
