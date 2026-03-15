"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ArthurFialho", label: "GitHub" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/arthurfialhodev/", label: "LinkedIn" },
  { icon: <FaWhatsapp />, path: "https://wa.me/5531997867386", label: "WhatsApp" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/arthurfialho_/", label: "Instagram" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <motion.footer
      initial="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className={`relative z-[100] border-t border-white/10 transition-all duration-300 ${scrolled ? "bg-primary/90 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
          <motion.div variants={itemVariants} className="flex flex-col items-center xl:items-start gap-4">
            <Link href="/">
              <h2 className="text-3xl font-semibold title-hover">
                arthur <span className="text-accent">.</span>
              </h2>
            </Link>
            <p className="text-white/50 text-sm max-w-[300px] text-center xl:text-left">
              Full Stack Software Engineer
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            {socials.map((item, index) => (
              <motion.a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 border border-white/20 rounded-full flex justify-center items-center text-white/60 hover:text-accent hover:border-accent transition-colors duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Arthur Fialho. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with <span className="text-accent">Next.js</span> &{" "}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
