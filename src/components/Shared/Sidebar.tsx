import React from "react";
import { Chat } from "../../utils/db";

export default function Sidebar({ chats, onSelect, onNewChat, currentId }:{
  chats: Chat[], onSelect:(id:string)=>void, onNewChat:()=>void, currentId?:string
}) {
  return (
    <div className="w-full md:w-80 bg-white shadow-xl h-full flex flex-col border-r">
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <span className="text-primary font-bold text-2xl">Titan</span>
        <button onClick={onNewChat} className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shadow">+</button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map(chat => (
          <button
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={`flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-blue-50 transition ${currentId === chat.id ? "bg-blue-100" : ""}`}
          >
            <img src={chat.photo || "/icon-192.png"} className="w-10 h-10 rounded-full" alt={chat.name}/>
            <div className="flex-1">
              <div className="font-bold">{chat.name}</div>
              <div className="text-xs text-gray-500 truncate">
                {chat.messages.at(-1)?.text}
              </div>
            </div>
            {chat.unread > 0 && (
              <span className="bg-primary text-white rounded-full px-2 text-xs">{chat.unread}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}