import Image from "next/image";
import faceImg from "@/assets/images/benefits-face.jpg";
import { benefits } from "@/content/landing";
import { cn } from "@/lib/cn";
import { CtaButton } from "../ui/CtaButton";
import { Frond, Hibiscus, Spark } from "../ui/Icons";
import { Rich } from "../ui/Rich";
import styles from "./Benefits.module.css";

export function Benefits() {
  return (
    <section className={styles.section} id="benefits">
      <Frond className={cn("deco", styles.frond)} />
      <Spark className={cn("deco", styles.spark)} />
      <div className="container">
        <div className={styles.bubble}>
          <div className={styles.head}>
            <h2 className={cn("script layer", styles.title)}>
              {benefits.title} <span className={cn("tag", styles.tag)}>{benefits.tag}</span>
            </h2>
            <div className={styles.oval}>
              <Image
                src={faceImg}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 160px, 110px"
                className={styles.ovalImg}
              />
            </div>
            <Hibiscus className={cn("deco", styles.hib)} />
          </div>
          <ul className={styles.list}>
            {benefits.items.map((item) => (
              <li key={item}>
                <Spark className={styles.bullet} />
                <span>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <CtaButton variant="cream" className={styles.cta}>
          {benefits.cta}
        </CtaButton>
      </div>
    </section>
  );
}
