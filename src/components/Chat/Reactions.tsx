import React from "react";
import { FaThumbsUp, FaHeart, FaLaugh, FaSurprise, FaSadTear } from "react-icons/fa";
import { motion } from "framer-motion";

const reactions = [
  { icon: <FaThumbsUp />, label: "like" },
  { icon: <FaHeart />, label: "love" },
  { icon: <FaLaugh />, label: "haha" },
  { icon: <FaSurprise />, label: "wow" },
  { icon: <FaSadTear />, label: "sad" },
];

export default function Reactions({ onReact }: { onReact: (type: string) => void }) {
  return (
    <motion.div className="flex gap-2 bg-white dark:bg-gray-700 px-2 py-1 rounded-full shadow-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      {reactions.map(r => (
        <button key={r.label} onClick={() => onReact(r.label)}
          className="hover:scale-150 transition-transform duration-150 mx-1 text-xl"
        >{r.icon}</button>
      ))}
    </motion.div>
  );
}