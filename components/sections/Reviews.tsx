import Image from "next/image";
import portraitImg from "@/assets/images/reviews.jpg";
import { reviews } from "@/content/landing";
import { cn } from "@/lib/cn";
import { Hibiscus, Spark } from "../ui/Icons";
import styles from "./Reviews.module.css";

export function Reviews() {
  return (
    <section className={styles.reviews} id="reviews">
      <h2 className={cn("script layer", styles.title)}>{reviews.title}</h2>
      <Hibiscus className={cn("deco", styles.hib)} />
      <Spark className={cn("deco", styles.spark)} />

      <div className={styles.strip}>
        <div className={styles.bg}>
          <Image src={portraitImg} alt="" fill sizes="100vw" className={styles.bgImg} />
        </div>
        <div className={styles.dots} />

        <div className={cn("container", styles.inner)}>
          <figure className={styles.portrait}>
            <Image
              src={portraitImg}
              alt={reviews.photoAlt}
              fill
              placeholder="blur"
              sizes="400px"
              className={styles.portraitImg}
            />
          </figure>

          <ul className={styles.list} aria-label="Скріншоти відгуків учениць">
            {reviews.items.map((item) => (
              <li key={item.alt} className={styles.item}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 82vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
