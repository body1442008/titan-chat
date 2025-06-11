import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoriesBar({ stories, onAdd, onView }: any) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex gap-3 px-2 py-2 bg-white dark:bg-gray-800 shadow overflow-x-auto border-b dark:border-gray-700">
      <button onClick={onAdd} className="rounded-full w-16 h-16 flex items-center justify-center bg-primary text-white text-3xl shadow">+</button>
      {stories.map((story: any, i: number) => (
        <motion.div
          key={story.id}
          className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary relative cursor-pointer"
          onClick={() => { onView(story); setActive(i); }}
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", duration: 0.4 }}
        >
          <img src={story.photo} alt={story.name} className="object-cover w-full h-full" />
          {/* Progress bar */}
          <AnimatePresence>
            {active === i && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 4, ease: "linear" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}