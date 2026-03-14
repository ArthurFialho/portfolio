"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-10">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            data-text={link.name}
            className={`nav-link relative uppercase text-sm font-semibold tracking-widest py-1.5
              transition-colors duration-300
              ${isActive ? "text-accent" : "text-white/40 hover:text-white/40"}
            `}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;