"use client";

import { mainNav, siteConfig } from "@/config/site";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utilities/cn";
import Link from "next/link";
import { useState } from "react";
import { CallToAction } from "./cta";
import { Icons } from "./icons";
import { Menubar } from "./menubar";
import { Navbar } from "./navbar";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const previousValue = scrollY.getPrevious();
    if (previousValue && latestValue > previousValue && latestValue > 150) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const HEADER_ANIMATION = isHeaderHidden ? "hidden" : "visible";

  return (
    <motion.header
      variants={HEADER_VARIANTS}
      animate={HEADER_ANIMATION}
      transition={{ ease: "easeInOut" }}
      className={cn("sticky top-0 z-30 bg-black text-white")}
    >
      <div className="container z-50 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="size-6" />
          <strong className="font-title text-xl font-bold">
            {siteConfig.shortName}
          </strong>
        </Link>
        <Navbar items={mainNav} />
        <CallToAction className="max-md:hidden h-14 py-0">
          <Link href="/contact-us">Let&apos;s talk</Link>
        </CallToAction>
        <Button
          onClick={handleMenuToggle}
          className="rounded hover:bg-black hover:text-white md:hidden"
          size="icon"
          variant="ghost"
        >
          {isMenuOpen ? <Icons.cross /> : <Icons.menu />}
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
        </Button>
        <AnimatePresence mode="sync">
          {isMenuOpen && (
            <Menubar handleMenuToggle={handleMenuToggle} items={mainNav} />
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

const HEADER_VARIANTS: Variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
  },
};
