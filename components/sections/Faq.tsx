import { faq } from "@/content/landing";
import { cn } from "@/lib/cn";
import { Rich } from "../ui/Rich";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className={cn("container", styles.grid)}>
        <h2 className={styles.title}>
          {faq.title.map((row, r) => (
            <span key={r} className={styles.row}>
              {row.map((word, i) => (
                <span key={word} className={cn("sticker", (r + i) % 2 ? "tr" : "tl")}>
                  {word}
                </span>
              ))}
            </span>
          ))}
        </h2>

        <div className={styles.list}>
          {faq.items.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary>
                <span className={styles.q}>{item.q}</span>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
              </summary>
              <div className={styles.a}>
                {item.a.map((p) => (
                  <p key={p}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
