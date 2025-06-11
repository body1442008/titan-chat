// رفع قصص جديدة
import React, { useRef } from "react";

export default function StoryUploader({ onUpload }: { onUpload: (file: File) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button onClick={() => inputRef.current?.click()} className="bg-primary text-white px-4 py-2 rounded-lg">
        Add Story
      </button>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/*,video/*"
        onChange={e => e.target.files && onUpload(e.target.files[0])}
      />
    </>
  );
}