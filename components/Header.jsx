"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname();
  const isTransparent = pathname === "/" || pathname === "/showroom" || pathname === "/work" || pathname === "/resume" || pathname === "/services" || pathname === "/contact";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`py-8 xl:py-12 text-white transition-all duration-300 ${
        isTransparent
          ? `fixed top-0 left-0 w-full z-50 ${
              scrolled
                ? "bg-primary/90 backdrop-blur-md shadow-lg !py-4 xl:!py-6"
                : "bg-transparent"
            }`
          : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="./">
          <h1 className="text-4xl font-semibold title-hover">
            Arthur <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="border border-accent text-primary hover:bg-accent hover:text-white hover:border-white transition-all duration-500">
              Hire me
            </Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
