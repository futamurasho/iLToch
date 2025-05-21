
import { useSession } from "next-auth/react";
import { RefObject, useEffect, useState } from "react"
import { cn } from "@/lib/utils";
import { toast, type Toast } from "sonner";

type MessageBubbleProps = {
  scrollAreaRef: RefObject<HTMLDivElement>;
  text: string;
  sender: string;
  time: string;
  read: boolean;
  snippet: string | undefined;
  subject: string | undefined;
};

export default function MessageBubble({
  scrollAreaRef,
  text,
  sender,
  time,
  read,
  snippet,
  subject,
}: MessageBubbleProps) {
  const { data: session } = useSession();
  const [scrollAreaRect, setScrollAreaRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      setScrollAreaRect(scrollAreaRef.current.getBoundingClientRect());
    }
  }, [scrollAreaRef]);
  const formatTime = (datetime: string) => {
    const date = new Date(datetime.replace(" ", "T"));
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  read = true; //一時的に全部既読にしてます
  return (
    <div
      className={cn(
        "flex  w-full",
        sender == session?.user?.email ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex  items-end max-w-md",
          sender == session?.user?.email ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div
          className={cn(
            "  px-4 py-2 mb-1 mt-1 rounded-2xl shadow text-black",
            sender == session?.user?.email
              ? "bg-green-300 rounded-tr-none"
              : "bg-blue-100 rounded-tl-none"
          )}
          onClick={() => {
            if (!scrollAreaRect) return;

            const toastWidth = scrollAreaRect.width - 90;
            const toastHeight = scrollAreaRect.height - 40;
            const toastTop = scrollAreaRect.top 
            toast.custom((t: Toast) => (
              <div
                style={{
                  position: "fixed",
                  top: toastTop,

                  width: toastWidth,
                  maxHeight: toastHeight,
                  zIndex: 9999,
                }}
                className="bg-white  rounded-lg shadow-lg text-black  flex flex-col"
              >
                <div className="p-6 overflow-y-auto">
                <p className="font-bold mb-2">件名: {subject}</p>
                <div className="break-words">{text}</div>
                </div>
                
                <div className="border-t px-4 py-2">

                <button
                  className="mt-4 text-blue-500 underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.dismiss(t.id);
                  }}
                >
                  閉じる
                </button>
                </div>
              </div>
            ));
          }}
        >
          <p className="test-sm break-words font-semibold">件名: {subject}</p>
          <br />
          <p className="test-sm break-words">{snippet}</p>
        </div>
        <div className="flex flex-col">
          <div className="text-xs text-gray-500 pl-1">{read && "既読"}</div>
          <div className="text-xs text-gray-500">{formatTime(time)}</div>
        </div>
      </div>
    </div>
  );
}
