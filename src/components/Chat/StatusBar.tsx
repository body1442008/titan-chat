import React from "react";

export default function StatusBar({ status, lastSeen, typing }: any) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 text-xs text-gray-500">
      {typing ? (
        <span className="text-blue-500 animate-pulse">يكتب...</span>
      ) : status === "online" ? (
        <span className="bg-green-400 w-2 h-2 rounded-full inline-block mr-1"></span>
      ) : (
        <span>آخر ظهور: {lastSeen}</span>
      )}
    </div>
  );
}