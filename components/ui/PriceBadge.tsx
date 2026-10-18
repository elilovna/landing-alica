import { price } from "@/content/landing";
import { cn } from "@/lib/cn";
import styles from "./PriceBadge.module.css";

type Props = {
  /** Унікальний id для кола з текстом (на сторінці кілька бейджів). */
  id: string;
  tone?: "guava" | "cream";
  className?: string;
};

/** Скільки разів "-60%" повторюється по колу. */
const RING_SLOTS = 7;

export function PriceBadge({ id, tone = "guava", className }: Props) {
  // Кожен напис і крапка стоять на рівних відстанях по всьому колу,
  // тож кільце замкнене незалежно від ширини шрифту.
  const ring = Array.from({ length: RING_SLOTS * 2 }, (_, i) => ({
    text: i % 2 ? "·" : price.discount,
    offset: `${((i + 0.5) / (RING_SLOTS * 2)) * 100}%`,
  }));

  return (
    <div className={cn(styles.badge, className)} data-tone={tone}>
      <svg className={styles.ring} viewBox="0 0 150 150" aria-hidden="true">
        <defs>
          <path id={id} d="M75 75m-62 0a62 62 0 1 1 124 0a62 62 0 1 1-124 0" />
        </defs>
        {ring.map(({ text, offset }) => (
          <text
            key={offset}
            className={styles.ringText}
            fontSize="15"
            letterSpacing="1"
            textAnchor="middle"
          >
            <textPath href={`#${id}`} startOffset={offset}>
              {text}
            </textPath>
          </text>
        ))}
      </svg>
      <div className={styles.core}>
        <p className={styles.now}>
          {price.now}
          <small>{price.currency}</small>
        </p>
        <p className={styles.was}>
          <span className="sr-only">замість </span>
          <s>
            {price.was} {price.currency}
          </s>
          <span className="sr-only"> (знижка {price.discount})</span>
        </p>
      </div>
    </div>
  );
}
