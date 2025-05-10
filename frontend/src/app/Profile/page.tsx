"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center">
        <div className="flex relative">
          <Avatar className="w-50 h-50 p-2">
            <AvatarImage src="/favicon.ico" />
            <AvatarFallback>
              {/* ここに画像がなかった時用のものをかく */}
            </AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="outline"
            className="absolute bottom-4 right-9 w-8 h-8 rounded-full p-0"
          >
            <img src="/favicon.ico" alt="" />
          </Button>
          {/* ボタンのとこには画像変えれるような処理を書きたいね */}
        </div>

        <div className="flex">
          {isEdit ? (
            <Input
              className="m-2"
              placeholder="昔の名前を出すか新しい名前って出すか"
            ></Input>
          ) : (
            <div className="text-3xl p-2 border-t">ユーザの名前！</div>
          )}

          <Button
            variant="secondary"
            className="m-2"
            onClick={() => setIsEdit((prev) => !prev)}
          >
            編集
          </Button>
        </div>
        <div className="text-3xl p-2 border-t">ユーザメールアドレス</div>
      </div>
    </div>
  );
}
