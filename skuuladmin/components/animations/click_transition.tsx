"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ClickTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      {/* <motion.div
        key={typeof window !== "undefined" ? window.location.pathname : ""}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full h-full"
      > */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        // className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
