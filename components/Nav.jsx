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
    <nav className="flex gap-11">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`nav-link relative py-2 overflow-hidden ${isActive ? "active-link" : ""}`}
          >
            {/* Letras originais */}
            <div className="word flex">
              {link.name.split("").map((char, i) => (
                <span
                  key={i}
                  className="char"
                  style={{ transitionDelay: `${i * 0.03}s` }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Letras fantasma (accent) */}
            <div className="word-ghost flex absolute top-0 left-0">
              {link.name.split("").map((char, i) => (
                <span
                  key={i}
                  className="char-ghost"
                  style={{ transitionDelay: `${i * 0.03}s` }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Ponto indicador de ativo */}
            <span className="dot" />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;