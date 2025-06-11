// ملصقات وGIF
import React from "react";

const stickers = ["/stickers/1.png", "/stickers/2.png", "/stickers/3.png"];
export default function StickerPicker({ onPick }: { onPick: (url: string) => void }) {
  return (
    <div className="flex gap-2 bg-gray-100 p-2 rounded">
      {stickers.map(url => (
        <img src={url} key={url} onClick={() => onPick(url)} className="w-10 h-10 cursor-pointer" />
      ))}
    </div>
  );
}