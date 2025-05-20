import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

type MessageBubbleProps = {
  text: string;
  sender: string;
  time: string;
  read: boolean;
};

export default function MessageBubble({
  text,
  sender,
  time,
  read,
}: MessageBubbleProps) {
  const { data: session } = useSession();
  console.log(session?.user);
  console.log(sender);
  const formatTime = (datetime: string) => {
    const date = new Date(datetime.replace(" ", "T"));
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  read = true;//一時的に全部既読にしてます
  return (
    <div
      className={cn(
        "flex  w-full",
        sender == session?.user?.email ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn("flex  items-end max-w-md", sender == session?.user?.email ? "flex-row-reverse" : "flex-row")}>
        <div
          className={cn(
            "  px-4 py-2 mb-1 mt-1 rounded-2xl shadow text-black",
            sender == session?.user?.email
              ? "bg-green-300 rounded-tr-none"
              : "bg-blue-100 rounded-tl-none"
          )}
        >
          <p className="test-sm break-words">{text}</p>
        </div>
        <div className="flex flex-col">
          <div className="text-xs text-gray-500 pl-1">{read && "既読"}</div>
          <div className="text-xs text-gray-500">{formatTime(time)}</div>
        </div>
      </div>
    </div>
  );
}
