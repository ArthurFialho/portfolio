"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const pathname = usePathname();
  const isTransparent = pathname === "/" || pathname === "/showroom" || pathname === "/work" || pathname === "/resume" || pathname === "/services" || pathname === "/contact";

  return (
    <header
      className={`py-8 xl:py-12 text-white ${
        isTransparent ? "absolute top-0 left-0 w-full z-50 bg-transparent" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* {logo} */}
        <Link href="./">
          <h1 className="text-4xl font-semibold title-hover">
            Arthur <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* {desktop nav & hire me button} */}
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
