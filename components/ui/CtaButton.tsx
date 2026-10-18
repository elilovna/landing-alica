import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { CheckoutLink } from "./CheckoutLink";

type Props = {
  children: ReactNode;
  variant?: "hib" | "cream";
  id?: string;
  className?: string;
};

export function CtaButton({ children, variant = "hib", id, className }: Props) {
  return (
    <CheckoutLink id={id} className={cn("btn", variant === "cream" && "btn-cream", className)}>
      {children}
    </CheckoutLink>
  );
}
