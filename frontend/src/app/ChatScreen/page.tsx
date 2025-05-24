"use client";
// import FriendSearch from "@/components/FriendSearch";
import GenericSearch from "@/components/GenericSearch";
import { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";
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
  const [filteredUsers, setFilteredUsers] = useState<UserListType[]>(UserList);
  const [emails, setEmails] = useState<EmailType[]>([]);
  const [filteredEmails, setFilteredEmails] = useState<EmailType[]>([]);
  const [selectUser, setSelectUser] = useState<FriendsType>({
    id: "",
    userId: "",
    emailAddress: "",
    createdAt: "",
  });
  const [friends, setFriends] = useState<FriendsType[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<FriendsType[]>([]);
  //status内にはloading,authenticated,unauthenticatedの状態を持つ、つまり、ログイン状態かそうでないか
  const { data: session, status } = useSession();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //ここで、DBにすでに登録されているユーザかどうかで処理が変わる
    //登録済みの場合、DBからメールを取得して表示
    //登録済みでない場合、GmailAPIの方から取得を行う。(その際に取得したメールはDBに保存(想定は10件程度))
    const fetchEmails = async () => {
      console.log("fetchかいし");
      // const res = await fetch("http://localhost:8080/api/email");
      // console.log(res.status);
      // const data = await res.json();

      console.log("fetchできました!");
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
        console.log("メール取得結果: ", data);
        setEmails(data.emails);
        // setFilteredEmails(data.emails); // 検索対象の初期値
        if (data.friends) {
          setFriends(data.friends);
          console.log("セットフレンドは呼ばれた");
        }
      }
    };
    if (status === "loading") {
    }
    if (status === "authenticated") {
      fetchEmails();
    }
  }, [session, status]);

  // useEffect(() => {
  //   const fetchFriend = async () => {
  //     const res = await fetch("http://localhost:8080/api/friend");
  //     const data = await res.json();
  //     setFriends(data);
  //     setFilteredFriends(data);
  //   };
  //   fetchFriend();
  //   console.log("friend頂き");
  // }, []);
  // useEffect(() => {
  //   const fetchFriend = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8080/api/friend");
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
  //       const data = await res.json();
  //       setFriends(data);
  //       setFilteredFriends(data);
  //     } catch (error) {
  //       console.error("友達リストの取得に失敗しました", error);
  //       setFriends([]);
  //       setFilteredFriends([]);
  //     }
  //   };
  //   fetchFriend();
  //   console.log("friend頂き");
  // }, []);

  useEffect(() => {
    if (!selectUser?.emailAddress) return;
    const relatedEmails = emails.filter(
      (email) =>
        email.senderAddress === selectUser.emailAddress ||
        email.receiverAddress === selectUser.emailAddress
    );
    setFilteredEmails(relatedEmails);
  }, [selectUser, emails]);

  const readHandler = (newEmail: EmailType) => {
    const newEmails = emails.map((email) =>
      email.id === newEmail.id ? newEmail : email
    );

    setEmails(newEmails);
  };

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
              <GenericSearch
                originalList={friends}
                onFilter={setFilteredFriends}
                searchKey="name"
                placeholder="フレンドを検索"
              />
              <ScrollArea className="h-full ">
                {Array.isArray(filteredFriends) &&
                filteredFriends.length > 0 ? (
                  filteredFriends.map((user) => {
                    const unreadCount = emails.filter(
                      (email) =>
                        email.senderAddress === user.emailAddress &&
                        email.isRead === false
                    ).length;

                    return (
                      <div
                        key={user.id}
                        className="flex justify-between border-b hover:bg-gray-100 cursor-pointer "
                        onClick={() => {
                          setSelectUser(user);
                        }}
                      >
                        <div className="p-2 text-lg">
                          {user.name ? user.name : user.emailAddress}
                        </div>
                        {unreadCount > 0 && (
                          <div className="p-2 mr-4 mt-1 rounded-full bg-red-500 text-white w-8 h-8 flex items-center justify-center">
                            {unreadCount}
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-2 border-b hover:bg-gray-100 cursor-pointer text-lg">
                    Loading....
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>
        <main className="flex-1 border-r p-4 overflow-hidden flex flex-col">
          <Card className="flex flex-col flex-1 overflow-hidden">
            <CardHeader className="border-b ">
              <CardTitle className="">
                {selectUser.name || selectUser.emailAddress || "メール"}
                からのメール
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
              <GenericSearch
                originalList={emails}
                onFilter={setFilteredEmails}
                searchKey="content"
                placeholder="メッセージを検索"
              />
              <ScrollArea ref={scrollAreaRef} className="h-full">
                {/* {filteredEmails
                  .filter((email) => email.senderAddress === selectUser.emailAddress)
                  .map((email) => ( */}
                {filteredEmails.map((email) => (
                  <MessageBubble
                    scrollAreaRef={scrollAreaRef}
                    key={email.id}
                    email={email}
                    readHandler={readHandler}
                  />
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
