// components/GenericSearch.tsx
"use client";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

type GenericSearchProps<T> = {
  originalList: T[];
  onFilter: (filtered: T[]) => void;
  searchKey: keyof T; // ここがポイント
  placeholder?: string;
};

export default function GenericSearch<T>({
  originalList,
  onFilter,
  searchKey,
  placeholder = "検索...",
}: GenericSearchProps<T>) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filtered = originalList.filter((item) => {
      const value = String(item[searchKey] ?? "").toLowerCase();
      return value.includes(query.toLowerCase());
    });
    onFilter(filtered);
    console.log("フィルターされたのは", filtered)
  }, [query, originalList, onFilter, searchKey]);

  console.log("オリジナルリストは",originalList)

  return (
    <Input
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="mb-2"
    />
  );
}
