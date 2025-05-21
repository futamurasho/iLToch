import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Header () {
  const router = useRouter();
  const {data: session} = useSession()
    return (
        <header className="bg-primary text-primary-foreground p-4 shadow-md flex justify-between h-18">
        <h1
          className="text-2xl font-bold cursor-pointer">
          iLToch
        </h1>
  
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0 w-10 h-10">
              <Avatar>
                <AvatarImage  src={session?.user?.image}/>{/*ユーザごとの画像を登録してもらって表示したいね．とりあえずはnextのロゴ */}
                <AvatarFallback>
                    {/* 画像が登録されていない時に使用する．user名のイニシャルとか */}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {
              router.push("/Profile")
            }}>
               
              プロフィール
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              router.push("/ChatScreen")
            }}>
              チャット
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              router.push("/FriendRegister")
            }}>
              <span>フレンド登録</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                {/* クリックされたらサインアウトする処理を記述 */}
              <span className="text-red-500">サインアウト</span> 
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    );
} 