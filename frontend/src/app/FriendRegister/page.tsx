"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { FriendsType } from "@/type/FriendsType";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "1以上のIDを入力してください" })
    .email("有効なメールアドレスを入力してください"),
});

export default function FriendRegister() {
  const [message, setMessage] = useState({ text: "", errrorFlag: 0 });
  const [friends, setFriends] = useState<FriendsType[]>([]);
  const { data: session, status } = useSession();
  const [editingId, setEditingId] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleDoubleClick = (friend: FriendsType) => {
    console.log("dobleclick");
    console.log(friend.id);
    setEditingId(friend.id);
    setInputValue(friend.name || "");
  };

  useEffect(() => {
    //ここで、DBにすでに登録されているユーザかどうかで処理が変わる
    //登録済みの場合、DBからメールを取得して表示
    //登録済みでない場合、GmailAPIの方から取得を行う。(その際に取得したメールはDBに保存(想定は10件程度))
    const fetchEmails = async () => {
      console.log("fetchかいし");
      console.log(session);
      if (session?.accessToken) {
        const res = await fetch("http://localhost:8080/api/get-emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken: session.accessToken,
            refreshToken: session.refreshToken,
            tokenExpiry: session.expires,
            email: session.user?.email, // DB保存時に使う想定
            userId: session.user?.id,
          }),
        });
        const data = await res.json();
        if (data.friends) {
          setFriends(data.friends); // ← ここで初期表示に friend が入る！
          console.log("セットフレンドは呼ばれた");
        }
      }
    };
    if (status === "authenticated") {
      fetchEmails();
    }
  }, [session, status, message]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const patchFriendName = async (friend: FriendsType) => {
    const res = await fetch(`http://localhost:8080/api/friend/${friend.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: friend.name }),
    });
    const data = await res.json();
    console.log(data);
  };
  const handleBlur = (friend: FriendsType) => {
    // 保存処理: API呼び出しなど
    patchFriendName({ ...friend, name: inputValue });
    const newFriend = { ...friend, name: inputValue };
    const updatedFriends = friends.map((f) =>
      f.id === friend.id ? newFriend : f
    );
    setFriends(updatedFriends);
    // 編集モード終了
    setEditingId("");
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("登録開始");
    console.log(session?.user.id);
    const res = await fetch("http://localhost:8080/api/friend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session?.user.id, //ここはセッション情報を作ろう
        emailAddress: values.email,
      }),
    });
    if (res.status === 409) {
      setMessage({ text: "すでに登録済みのフレンドです。", errrorFlag: 1 });
    } else if (res.ok) {
      setMessage({ text: "登録完了しました！", errrorFlag: 0 });
      form.reset(); // 入力フォームを初期化
    } else {
      setMessage({
        text: "登録に失敗しました。もう一度お試しください。",
        errrorFlag: 1,
      });
    }
    const data = await res.json();
    console.log(data);
    return;
  };
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Friend Mail Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="登録したいメールアドレスを入力してください"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>フレンド登録</Button>
          </form>
        </Form>
      </div>
      {message && (
        <p
          className={cn(
            "text-center mt-4 text-lg font-medium",
            message.errrorFlag == 1 ? "text-red-600" : "text-blue-600"
          )}
        >
          {message.text}
        </p>
      )}
      <div className="h-full border-r p-4 overflow-hidden flex flex-col">
        <Card className="flex flex-col flex-1 overflow-hidden">
          <CardHeader className="border-b">
            <CardTitle>メールフレンド一覧</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden">
            <ScrollArea className="h-full ">
              {Array.isArray(friends) ? (
                friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="p-2 border-b hover:bg-gray-100 cursor-pointer text-lg"
                    onDoubleClick={() => handleDoubleClick(friend)}
                  >
                    {editingId == friend.id ? (
                      <Input
                        placeholder={friend.name}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onBlur={() => handleBlur(friend)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault(); // 改行防止（必要に応じて）
                            handleBlur(friend);
                          }
                        }}
                        autoFocus
                      />
                    ) : friend.name ? (
                      <div className="flex flex-col">
                        <span>{friend.name}</span>
                        <span className="text-sm text-gray-500">
                          {friend.emailAddress}
                        </span>
                      </div>
                    ) : (
                      friend.emailAddress
                    )}
                  </div>
                ))
              ) : (
                <div className="p-2 border-b hover:bg-gray-100 cursor-pointer text-lg">
                  Loading....
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
