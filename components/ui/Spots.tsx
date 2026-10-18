import { spots } from "@/content/landing";
import { cn } from "@/lib/cn";
import { Spark } from "./Icons";
import styles from "./Spots.module.css";

type Props = {
  tone?: "light" | "dark";
  align?: "center" | "start";
  className?: string;
};

export function Spots({ tone = "light", align = "center", className }: Props) {
  return (
    <div className={cn(styles.spots, className)} data-tone={tone} data-align={align}>
      <Spark className={styles.spark} />
      <p>
        <strong>
          {spots.taken}/{spots.total} {spots.label}
        </strong>
        <span>{spots.hint}</span>
      </p>
      <Spark className={styles.spark} />
    </div>
  );
}
