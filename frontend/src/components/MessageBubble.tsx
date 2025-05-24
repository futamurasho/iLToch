import { useSession } from "next-auth/react";
import { RefObject, useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { toast, type Toast } from "sonner";
import type { EmailType } from "@/type/EmailType";
import DOMPurify from "dompurify";

type MessageBubbleProps = {
  scrollAreaRef: RefObject<HTMLDivElement | null>;
  email: EmailType;
  readHandler: (x: EmailType) => void;
  showDate: boolean | string;
  currentDate: string;
};

export default function MessageBubble({
  scrollAreaRef,
  email,
  readHandler,
  showDate,
  currentDate,
}: MessageBubbleProps) {
  const { data: session } = useSession();
  const [scrollAreaRect, setScrollAreaRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      setScrollAreaRect(scrollAreaRef.current.getBoundingClientRect());
    }
  }, [scrollAreaRef]);

  const formatTime = (datetime: string | undefined) => {
    if (!datetime) {
      return;
    }
    const date = new Date(datetime.replace(" ", "T"));
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const patchReadHandler = async (newEmail: EmailType) => {
    console.log("patch開始しました");
    const res = await fetch(`http://localhost:8080/api/emails/${newEmail.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    readHandler(newEmail);
  };
  return (
    <div>
      {showDate && (
        <div className="flex justify-center my-4">
          <div className="bg-gray-200 text-gray-700 text-sm px-4 py-1 rounded-full">
            {currentDate}
          </div>
        </div>
      )}
      <div
        className={cn(
          "flex  w-full",
          email.senderAddress == session?.user?.email
            ? "justify-end"
            : "justify-start"
        )}
      >
        <div
          className={cn(
            "flex  items-end max-w-md",
            email.senderAddress == session?.user?.email
              ? "flex-row-reverse"
              : "flex-row"
          )}
        >
          <div
            className={cn(
              "  px-4 py-2 mb-1 mt-1 rounded-2xl shadow text-black",
              email.senderAddress == session?.user?.email
                ? "bg-green-300 rounded-tr-none"
                : "bg-blue-100 rounded-tl-none"
            )}
            onClick={() => {
              if (!scrollAreaRect) return;

              const toastWidth = scrollAreaRect.width - 90;
              const toastHeight = scrollAreaRect.height - 40;
              const toastTop = scrollAreaRect.top;
              toast.custom((t: Toast) => {
                function ToastContent() {
                  const toastRef = useRef<HTMLDivElement>(null);

                  useEffect(() => {
                    const handleClickOutside = (event: MouseEvent) => {
                      if (
                        toastRef.current &&
                        !toastRef.current.contains(event.target as Node)
                      ) {
                        toast.dismiss(t.id);
                      }
                    };

                    document.addEventListener("mousedown", handleClickOutside);
                    return () => {
                      document.removeEventListener(
                        "mousedown",
                        handleClickOutside
                      );
                    };
                  }, []);

                  return (
                    <div
                      ref={toastRef}
                      style={{
                        position: "fixed",
                        top: toastTop,
                        width: toastWidth,
                        maxHeight: toastHeight,
                        zIndex: 9999,
                      }}
                      className="bg-white rounded-lg shadow-lg text-black flex flex-col"
                    >
                      <div className="p-6 overflow-y-auto">
                        <p className="font-bold mb-2">件名: {email.subject}</p>
                        <div
                          className="break-words"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(email.html_content),
                          }}
                        ></div>
                      </div>

                      <div className="border-t px-4 py-2">
                        <button
                          className="mt-4 text-blue-500 underline"
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.dismiss(t.id);
                            if (email.senderAddress !== session?.user?.email) {
                              const newEmail = { ...email, isRead: true };
                              patchReadHandler(newEmail);
                            }
                          }}
                        >
                          閉じる
                        </button>
                      </div>
                    </div>
                  );
                }

                return <ToastContent />;
              });

              // toast.custom((t: Toast) => (
              //   <div
              //     style={{
              //       position: "fixed",
              //       top: toastTop,

              //       width: toastWidth,
              //       maxHeight: toastHeight,
              //       zIndex: 9999,
              //     }}
              //     className="bg-white  rounded-lg shadow-lg text-black  flex flex-col"
              //   >
              //     <div className="p-6 overflow-y-auto">
              //       <p className="font-bold mb-2">件名: {email.subject}</p>
              //       <div
              //         className="break-words"
              //         dangerouslySetInnerHTML={{
              //           __html: DOMPurify.sanitize(email.html_content),
              //         }}
              //       ></div>
              //     </div>

              //     <div className="border-t px-4 py-2">
              //       <button
              //         className="mt-4 text-blue-500 underline"
              //         onClick={(e) => {
              //           e.stopPropagation();
              //           toast.dismiss(t.id);
              //           if (email.senderAddress != session?.user?.email) {
              //             const newEmail = { ...email, isRead: true };
              //             patchReadHandler(newEmail);
              //           }
              //         }}
              //       >
              //         閉じる
              //       </button>
              //     </div>
              //   </div>
              // ));
            }}
          >
            <p className="test-sm break-words font-semibold">
              件名: {email.subject}
            </p>
            <br />
            <p className="test-sm break-words">{email.snippet}</p>
          </div>
          <div className="flex flex-col">
            {email.senderAddress != session?.user?.email && (
              <div className="text-xs text-gray-500 pl-1">
                {email.isRead && "既読"}
              </div>
            )}

            <div className="text-xs text-gray-500">
              {formatTime(email.receivedAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
