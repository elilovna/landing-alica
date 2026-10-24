import { price } from "@/content/landing";
import { cn } from "@/lib/cn";
import styles from "./PriceBadge.module.css";

type Props = {
  tone?: "guava" | "cream";
  className?: string;
};

export function PriceBadge({ tone = "guava", className }: Props) {
  return (
    <div className={cn(styles.badge, className)} data-tone={tone}>
      <div className={styles.core}>
        <p className={styles.amount}>
          {price.amount}
          <small>{price.currency}</small>
        </p>
      </div>
    </div>
  );
}
