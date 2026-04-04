"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.5, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.5, ease: "easeInOut" },
          }}
          className="w-[238px] h-[238px] xl:w-[398px] xl:h-[398px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo2.png"
            priority
            quality={82}
            sizes="(max-width: 1280px) 240px, 400px"
            fill
            alt=""
            className="object-contain rounded-full"
          />
        </motion.div>

        <motion.svg
          className="w-[240px] xl:w-[405px] h-[240px] xl:h-[405px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http:www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#66D2CE"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
