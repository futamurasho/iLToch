"use client";
import { useState } from "react";
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
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "1以上のIDを入力してください" })
    .email("有効なメールアドレスを入力してください"),
});

export default function FriendRegister() {
    const [message, setMessage] = useState({text: "", errrorFlag: 0});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("登録開始")
    const res = await fetch("http://localhost:8080/api/friend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "a", //ここはセッション情報を作ろう
        sender: values.email,
      }),
    });
    if (res.status === 409) {
        setMessage({text: "すでに登録済みのフレンドです。", errrorFlag:1});
      } else if (res.ok) {
        setMessage({text:"登録完了しました！", errrorFlag:0});
        form.reset(); // 入力フォームを初期化
      } else {
        setMessage({text: "登録に失敗しました。もう一度お試しください。", errrorFlag:1});
      }
    const data = await res.json();
    console.log(data);
    return;
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
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
      {message && (
        <p className={cn("text-center mt-4 text-lg font-medium", message.errrorFlag == 1 ? "text-red-600" : "text-blue-600")}>{message.text}</p>
      )}
    </div>
  );
}
