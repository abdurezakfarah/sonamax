"use client";

import { siteConfig } from "@/config/site";
import { usePreventScroll } from "@/hooks/use-prevent-scroll";
import { cn } from "@/lib/utilities/cn";
import { NavItem } from "@/types";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Icons } from "./icons";

interface MenubarProps {
  items: NavItem[];
  handleMenuToggle: () => void;
}
export function Menubar({ items, handleMenuToggle }: MenubarProps) {
  usePreventScroll();

  return (
    <div
      className={cn(
        "backdrop-sm fixed inset-0 top-16 z-20 h-[calc(100vh-4rem)] transition-colors duration-300 md:hidden",
      )}
    >
      <motion.div
        variants={MANUBAR_VARIANTS}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="relative z-20 ml-auto flex w-full flex-col gap-6 overflow-hidden bg-black px-4 py-2 text-primary-content shadow-md"
      >
        <nav className="mt-10 space-y-2">
          {items.map((item, index) => (
            <Link
              key={`${index} - ${item.title} - ${item.href}`}
              href={item.disabled ? "#" : item.href}
              onClick={handleMenuToggle}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-2xl font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <ul className="mt-10 space-y-5">
          <li>
            <Link
              className="flex items-center gap-5"
              href={`tel:${siteConfig.phone}`}
            >
              <Icons.phone className="size-7" />
              <div className="">
                <p className="text-lg font-medium">Call now</p>
                <p>{siteConfig.phone}</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-5"
              href={`mailto:${siteConfig.email}`}
            >
              <Icons.mail className="size-7" />
              <div>
                <p className="text-lg font-medium">Send email</p>
                <p>{siteConfig.email}</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-5"
              href={`http://maps.google.com/?q=${siteConfig.location}`}
            >
              <Icons.mapPin className="size-7" />
              <div>
                <p className="text-lg font-medium">Visit us</p>
                <p>{siteConfig.location}</p>
              </div>
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
const MANUBAR_VARIANTS: Variants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: "100%",
  },
};
