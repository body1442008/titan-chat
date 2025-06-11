import React, { Suspense } from "react";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans">
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="text-center pt-10 text-primary text-xl">تحميل...</div>}>
          <AppRoutes />
          <ToastContainer position="bottom-right" />
        </Suspense>
      </AnimatePresence>
    </div>
  );
}

export default App;