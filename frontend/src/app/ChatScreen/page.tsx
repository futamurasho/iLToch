"use client";
import { useState } from "react";

import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import MessageBubble from "@/components/MessageBubble";
import { UserListType } from "@/type/UserListType";
import { MessageType } from "@/type/MessageType";

const UserList: UserListType[] = [
  {
    id: 1,
    name: "ichika",
  },
  {
    id: 2,
    name: "sho",
  },
  {
    id: 3,
    name: "shotaro",
  },
  {
    id: 4,
    name: "morochan",
  },
];




export default function ChatScreen() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [selectUser, setSelectUser] = useState<UserListType>({id: 0, name: ""});


  
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/3 border-r p-4 overflow-hidden flex flex-col">
          <Card className="flex flex-col flex-1 overflow-hidden">
            <CardHeader className="border-b">
              <CardTitle>メールフレンド一覧</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
              <ScrollArea className="h-full ">
                {UserList.map((user) => (
                <div
                key={user.id}
                className="p-2 border-b hover:bg-gray-100 cursor-pointer text-lg"
                onClick={() => {setSelectUser(user)
                }}
              >
                {user.name}
              </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>
        <main className="flex-1 border-r p-4 overflow-hidden flex flex-col">
          <Card className="flex flex-col flex-1 overflow-hidden">
            <CardHeader className="border-b ">
              <CardTitle className="">〇〇からのメール</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                {messages.map((message) => (
                  <MessageBubble key={message.id} text={message.text} />
                ))}
                Chat画面，選択された送り主のメールを表示．選ばれてない時はメールを確認しよう！とか
                日本ではコンピュータ技術の発達により1970年代に「情報検索システム」が始まり、言葉としての｢検索｣は次第に広く使われ始めた[1][2]。英語の文化圏では言葉としての「検索」は犬のゴールデン・レトリバーに見るように「探しだす」を意味する「retrieval」や「retrieve」として古くから使われている[3][4]。
                日本語における言葉「検索」の意味合いと使用例において大まかに次の様な変遷が見られる。主に日本語。
                意味合い[編集]
                広辞苑（1998年（平成10年）11月改訂）第5版までは、「検索」の意味として単に「調べさがすこと」、用例として「索引で語を検索する」と書かれている。このころまでは、一冊または複数冊の本の中に記述される事柄を探すことが、言葉としての「検索」の主な使われ方であった。一般的な言葉として馴染まれ使われていたのは、｢検索｣より、むしろ単に「見つける」、「探す」、「探索」といった言葉であった[5]。検索した結果、目的とする言葉が見つからなければ、他の本を手にとって調べてみることになる。このことはコンピュータによる情報検索が行える現代においても、図書館や本屋において誰しも試みることである。一方、図書館では蔵書に対して「目録カード」や「カード目録」などと呼ぶ名刺大から葉書大程度のカードから所要の本を探し出したが、このような検索は蔵書検索と呼ばれ、現在でもコンピュータなどによる情報検索と併用されている[6][7][8]。
                広辞苑第6版（2008年（平成20年）1月改訂）では、「検索」の意味として「データの中から、必要な事項をさがし出すこと」とし、コンピューターの中のデータや、紙やマイクロフィルムに記録されたデータの中から探し出す、現在の検索への意味合いへと変化が見られる。用例は変わっていない。（なお、広辞苑5版から6版が出るまでの10年間にも、別の出版社から毎年刊行されている「現代用語の基礎知識」には「検索エンジン」などの用語の解説はあった。ただし、「検索」という言葉そのものの解説はない。）Ï
                日本ではコンピュータ技術の発達により1970年代に「情報検索システム」が始まり、言葉としての｢検索｣は次第に広く使われ始めた[1][2]。英語の文化圏では言葉としての「検索」は犬のゴールデン・レトリバーに見るように「探しだす」を意味する「retrieval」や「retrieve」として古くから使われている[3][4]。
                日本語における言葉「検索」の意味合いと使用例において大まかに次の様な変遷が見られる。主に日本語。
                意味合い[編集]
                広辞苑（1998年（平成10年）11月改訂）第5版までは、「検索」の意味として単に「調べさがすこと」、用例として「索引で語を検索する」と書かれている。このころまでは、一冊または複数冊の本の中に記述される事柄を探すことが、言葉としての「検索」の主な使われ方であった。一般的な言葉として馴染まれ使われていたのは、｢検索｣より、むしろ単に「見つける」、「探す」、「探索」といった言葉であった[5]。検索した結果、目的とする言葉が見つからなければ、他の本を手にとって調べてみることになる。このことはコンピュータによる情報検索が行える現代においても、図書館や本屋において誰しも試みることである。一方、図書館では蔵書に対して「目録カード」や「カード目録」などと呼ぶ名刺大から葉書大程度のカードから所要の本を探し出したが、このような検索は蔵書検索と呼ばれ、現在でもコンピュータなどによる情報検索と併用されている[6][7][8]。
                広辞苑第6版（2008年（平成20年）1月改訂）では、「検索」の意味として「データの中から、必要な事項をさがし出すこと」とし、コンピューターの中のデータや、紙やマイクロフィルムに記録されたデータの中から探し出す、現在の検索への意味合いへと変化が見られる。用例は変わっていない。（なお、広辞苑5版から6版が出るまでの10年間にも、別の出版社から毎年刊行されている「現代用語の基礎知識」には「検索エンジン」などの用語の解説はあった。ただし、「検索」という言葉そのものの解説はない。）
              </ScrollArea>
            </CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // ← これを最初に書いておくと安全
                const formData = new FormData(e.currentTarget);
                const message = formData.get("message") as string;

                if (message.trim() !== "") {
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: Date.now(), // 適当な一意ID
                      text: message,
                    },
                  ]);

                  e.currentTarget.reset();
                }
              }}
            >
              <div className="flex pr-2 pl-2">
                <Input
                  className="flex-1"
                  name="message"
                  placeholder="返信を入力"
                />
                <Button variant="outline" type="submit" className="bg-blue-300">
                  送信
                </Button>
              </div>
            </form>
          </Card>
        </main>
      </div>
    </div>
  );
}
