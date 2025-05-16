"use client"

import Header from "@/components/Header";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";


const formSchema = z.object({
     email: z
    .string()
    .min(1, { message: "1以上のIDを入力してください"})
    .email("有効なメールアドレスを入力してください")
});

export default function FriendRegister() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = () => {
        // ここにフレンド登録APIを記述
        return
    }
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField 
            control={form.control}
            name="email"
            render={({field}) => (
                <FormItem>
                    <FormLabel className="text-xl">Friend Mail Address</FormLabel>
                    <FormControl>
                        <Input placeholder="登録したいメールアドレスを入力してください" type="text" {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}/>
                <Button>フレンド登録</Button>
            </form>

        </Form>
        
        
    </div>
  );
}
