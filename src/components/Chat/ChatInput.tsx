// إدخال الرسائل مع دعم كل الأنواع
import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import VoiceRecorder from "./VoiceRecorder";
import StickerPicker from "../Stickers/StickerPicker";

export default function ChatInput({ onSend, onSendFile, onSendSticker, onSendVoice }: any) {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [showStickers, setShowStickers] = useState(false);

  return (
    <div className="flex items-center gap-2 p-2 border-t bg-white dark:bg-gray-800">
      <button onClick={() => setShowEmoji(!showEmoji)}>😊</button>
      {showEmoji && <div className="absolute bottom-14"><EmojiPicker onEmojiClick={e => setMessage(m => m + e.emoji)} /></div>}
      <button onClick={() => setShowStickers(!showStickers)}>🖼️</button>
      {showStickers && <div className="absolute bottom-14"><StickerPicker onPick={onSendSticker} /></div>}
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-lg border"
        onKeyDown={e => (e.key === "Enter" && message.trim()) && (onSend(message), setMessage(""))}
      />
      <input type="file" className="hidden" id="file-upload" onChange={e => e.target.files && onSendFile(e.target.files[0])} />
      <label htmlFor="file-upload" className="cursor-pointer px-2">📎</label>
      <VoiceRecorder onSend={onSendVoice} />
      <button
        onClick={() => {
          if (message.trim()) {
            onSend(message);
            setMessage("");
          }
        }}
        className="bg-primary text-white px-4 py-2 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}