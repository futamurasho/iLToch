import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

type MessageBubbleProps = {
  text: string
  sender: string
}


export default function MessageBubble({ text, sender }:MessageBubbleProps) {
  const {data: session} = useSession()
  return (
    <div className={cn("flex w-full", sender == session?.user?.email ?"justify-end": "justify-start")}>
      <div className={cn("max-w-xs px-4 py-2 rounded-2xl shadow text-black",sender == session?.user?.email ?"bg-green-300 rounded-tr-none": "bg-blue-100 rounded-tl-none")}>
        <p className="test-sm">{text}</p>
      </div>
    </div>
  );
}
