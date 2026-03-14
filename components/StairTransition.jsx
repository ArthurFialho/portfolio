"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="fixed inset-0 z-[9999] pointer-events-none flex"
        initial={false}
        exit={{ opacity: 1, transition: { duration: 0.9 } }}
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
