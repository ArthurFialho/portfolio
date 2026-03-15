"use client";

import { motion } from "framer-motion";

const BallpitToggle = ({ enabled, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-[110] flex items-center gap-2 px-4 py-2.5 rounded-full
        bg-primary/80 backdrop-blur-md border-2 border-accent text-accent
        hover:bg-accent hover:text-primary hover:scale-105
        active:scale-95
        transition-colors duration-300 cursor-pointer
        shadow-lg shadow-accent/20 hover:shadow-accent/40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={enabled ? "Desativar bolas" : "Ativar bolas"}
    >
      <motion.span
        animate={{
          rotate: enabled ? 0 : 180,
          scale: enabled ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {enabled ? (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="6" cy="8" r="2.5" strokeWidth="2" />
            <circle cx="18" cy="8" r="2.5" strokeWidth="2" />
            <circle cx="12" cy="16" r="2.5" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </motion.span>
      <span className="text-sm font-medium uppercase tracking-wider hidden sm:inline">
        {enabled ? "Bubbles" : "Activate"}
      </span>
    </motion.button>
  );
};

export default BallpitToggle;
