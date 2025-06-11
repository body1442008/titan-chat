import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");

  return (
    <motion.div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm"
      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        value={q}
        onChange={e => {
          setQ(e.target.value);
          onSearch(e.target.value);
        }}
        className="bg-transparent outline-none w-full text-gray-700 dark:text-gray-100"
        placeholder="بحث في الأصدقاء أو الرسائل..."
      />
    </motion.div>
  );
}