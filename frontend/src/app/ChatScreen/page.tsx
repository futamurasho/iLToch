"use client";
// import FriendSearch from "@/components/FriendSearch"; // ← 追加したやつ
import { useEffect, useState } from "react";
import GenericSearch from "@/components/GenericSearch"; // ← 新しく追加
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import MessageBubble from "@/components/MessageBubble";
import { UserListType } from "@/type/UserListType";
import { EmailType } from "@/type/EmailType";
import { FriendsType } from "@/type/FriendsType";

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
  // const [filteredUsers, setFilteredUsers] = useState<UserListType[]>(UserList); // ← これを追加
  const [emails, setEmails] = useState<EmailType[]>([]);
  const [filteredEmails, setFilteredEmails] = useState<EmailType[]>([]);
  const [selectUser, setSelectUser] = useState<FriendsType>({
    id: "",
    userId: "",
    sender: "",
    createdAt: "",
  });
  const [friends, setFriends] = useState<FriendsType[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<FriendsType[]>([]);

  useEffect(() => {
    const fetchEmail = async () => {
      console.log("fetchかいし");
      const res = await fetch("http://localhost:8080/api/email");
      console.log(res.status);
      const data = await res.json();
      setEmails(data);
      setFilteredEmails(data); // 検索対象の初期値
      console.log("fetchできました!");
    };
    fetchEmail();
  }, []);

  useEffect(() => {
    const fetchFriend = async () => {
      const res = await fetch("http://localhost:8080/api/friend");
      const data = await res.json();
      setFriends(data);
      setFilteredFriends(data);
    };
    fetchFriend();
    console.log("friend頂き");
  }, []);

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
              {/* <FriendSearch userList={UserList} onFilter={setFilteredUsers} /> */}
              <GenericSearch
                originalList={friends}
                onFilter={setFilteredFriends}
                searchKey="name"
                placeholder="フレンドを検索"
              />
              <ScrollArea className="h-full ">
                {friends.map((user) => (
                  <div
                    key={user.id}
                    className="p-2 border-b hover:bg-gray-100 cursor-pointer text-lg"
                    onClick={() => {
                      setSelectUser(user)
                    }}
                  >
                    {user.name ? user.name : user.sender}
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
              <GenericSearch
                originalList={emails}
                onFilter={setFilteredEmails}
                searchKey="content"
                placeholder="メッセージを検索"
              />
              <ScrollArea className="h-full">
                {emails.map((email) => (
                  <MessageBubble key={email.id} text={email.content} />
                ))}
              </ScrollArea>
            </CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // ← これを最初に書いておくと安全
                const formData = new FormData(e.currentTarget);
                const email = formData.get("email") as string;

                if (email.trim() !== "") {
                  setEmails((prev) => [
                    ...prev,
                    // 現状ここ適当になってます．session情報とかが作れたら変更必要
                    {
                      id: Date.now(), // 適当な一意ID
                      userId: selectUser.id,
                      gmailMessageId: "1",
                      content: email,
                      isRead: true,
                      isNotified: true,
                      createdAt: "2025-05-16",
                    },
                  ]);

                  e.currentTarget.reset();
                }
              }}
            >
              <div className="flex pr-2 pl-2">
                <Input
                  className="flex-1"
                  name="email"
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
