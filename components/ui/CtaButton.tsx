import type { ReactNode } from "react";
import { site } from "@/content/landing";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  variant?: "hib" | "cream";
  id?: string;
  className?: string;
};

export function CtaButton({ children, variant = "hib", id, className }: Props) {
  return (
    <a
      id={id}
      href={site.checkoutUrl}
      className={cn("btn", variant === "cream" && "btn-cream", className)}
    >
      {children}
    </a>
  );
}
