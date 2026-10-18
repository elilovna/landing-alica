import Image from "next/image";
import { results } from "@/content/landing";
import { cn } from "@/lib/cn";
import { Arrow, Hibiscus, Spark } from "../ui/Icons";
import styles from "./Results.module.css";

export function Results() {
  return (
    <section className={cn("section", styles.results)} id="results">
      <div className="container">
        <h2 className={styles.title}>
          <span className={cn("sticker soft tl", styles.before)}>{results.before}</span>
          <span className="sr-only"> і </span>
          <Arrow className={styles.arrow} />
          <span className={cn("script layer", styles.after)}>{results.after}</span>
        </h2>

        <div className={styles.grid}>
          {results.items.map((item, i) => (
            <figure key={item.alt} className={styles.card} data-tilt={i % 2 ? "right" : "left"}>
              <Image
                src={item.src}
                alt={item.alt}
                placeholder="blur"
                sizes="(min-width: 1280px) 560px, (min-width: 768px) 45vw, 92vw"
                className={styles.img}
              />
              {i === 0 ? (
                <Hibiscus className={cn("deco", styles.hib)} />
              ) : (
                <Spark className={cn("deco", styles.spark)} />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
