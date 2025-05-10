import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";


export default function Header () {
    return (
        <header className="bg-primary text-primary-foreground p-4 shadow-md flex justify-between h-18">
        <h1
          className="text-2xl font-bold cursor-pointer">
          Chat App
        </h1>
  
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0 w-10 h-10">
              <Avatar>
                <AvatarImage  src="/favicon.ico"/>{/*ユーザごとの画像を登録してもらって表示したいね．とりあえずはnextのロゴ */}
                <AvatarFallback>
                    {/* 画像が登録されていない時に使用する．user名のイニシャルとか */}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem >
                {/* クリックされたらプロフィール画面に遷移する処理を記述 */}
              プロフィール
            </DropdownMenuItem>
            <DropdownMenuItem >
                {/* クリックされたらチャット画面に遷移する処理を記述 */}
              チャット
            </DropdownMenuItem>
            <DropdownMenuItem>
                {/* クリックされたらフレンド登録画面に遷移する処理を記述 */}
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