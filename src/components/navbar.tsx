import { cn } from "@/lib/utilities/cn";
import { NavItem } from "@/types";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavbarProps {
  items: NavItem[];
}
export function Navbar({ items }: NavbarProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="hidden flex-1 items-center justify-center gap-6 font-sans md:flex">
      {items.map((item) => (
        <Link
          key={`navitem ${item.title}`}
          href={item.disabled ? "#" : item.href}
          className={cn("capitalize transition-colors hover:text-primary", {
            "hover:text-primary": item.href.startsWith(`/${segment}`),
            "text-white": !item.href.startsWith(`/${segment}`),
            "cursor-not-allowed opacity-80": item.disabled,
          })}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
