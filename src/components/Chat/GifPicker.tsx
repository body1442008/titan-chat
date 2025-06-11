import React, { useState } from "react";
import { searchGiphy } from "../../utils/giphy";

export default function GifPicker({ onSelect }: { onSelect: (url: string) => void }) {
  const [results, setResults] = useState<any[]>([]);
  const [q, setQ] = useState("");

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const gifs = await searchGiphy(q);
    setResults(gifs);
  }

  return (
    <div className="p-2 bg-white rounded-lg shadow-lg w-96">
      <form onSubmit={handleSearch} className="flex gap-2 mb-2">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1"
          value={q}
          placeholder="ابحث عن GIF..."
          onChange={e => setQ(e.target.value)}
        />
        <button type="submit" className="bg-primary text-white px-3 rounded">بحث</button>
      </form>
      <div className="grid grid-cols-4 gap-2">
        {results.map(gif => (
          <img
            key={gif.id}
            src={gif.images.fixed_height_small.url}
            alt={gif.title}
            className="rounded cursor-pointer"
            onClick={() => onSelect(gif.images.original.url)}
          />
        ))}
      </div>
    </div>
  );
}