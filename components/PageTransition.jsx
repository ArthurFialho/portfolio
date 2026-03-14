"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1, transition: { duration: 0.9 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
