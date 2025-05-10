




export default function MessageBubble({ text }) {
  return (
    <div className="flex w-full justify-end">
      <div className="max-w-xs px-4 py-2 rounded-2xl shadow text-black">
        <p className="test-sm">{text}</p>
      </div>
    </div>
  );
}
