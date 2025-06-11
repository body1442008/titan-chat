import React from "react";
import { Message } from "../../utils/db";

export default function MessageBubble({ msg, isOwn, onReact, onReply }:{
  msg: Message, isOwn: boolean, onReact: (emoji:string)=>void, onReply:(msg:Message)=>void
}) {
  return (
    <div className={`flex gap-2 items-end mb-2 ${isOwn ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-xs flex flex-col ${isOwn ? "items-end" : "items-start"}`}>
        <div className={`relative px-4 py-2 rounded-2xl shadow-md text-sm whitespace-pre-line
          ${isOwn ? "bg-primary text-white" : "bg-white text-gray-800"}`}>
          {msg.replyTo && <div className="mb-1 border-l-4 border-blue-300 pl-2 text-xs text-blue-700 bg-blue-50 rounded">
            رد على: {msg.replyTo}
          </div>}
          {msg.type === "image" && <img src={msg.fileUrl} className="rounded-xl mb-1 max-h-48" alt="sent" />}
          {msg.text}
          <span className="absolute text-xs text-gray-400 bottom-1 right-2">{new Date(msg.time).toLocaleTimeString()}</span>
        </div>
        <div className="flex gap-2 mt-1">
          <button onClick={()=>onReply(msg)} className="text-xs text-primary hover:underline">رد</button>
          <button onClick={()=>onReact("👍")} className="text-xs text-blue-500 hover:underline">👍</button>
          <button onClick={()=>onReact("❤️")} className="text-xs text-red-500 hover:underline">❤️</button>
        </div>
        {msg.reactions?.length > 0 && (
          <div className="flex gap-1 mt-1">
            {msg.reactions.map((r, i) => (
              <span key={i} className="text-lg">{r.emoji}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}