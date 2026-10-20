import Image from "next/image";
import heroImg from "@/assets/images/hero.jpg";
import { hero, price } from "@/content/landing";
import { cn } from "@/lib/cn";
import { CtaButton } from "../ui/CtaButton";
import { Frond, Hibiscus, Spark } from "../ui/Icons";
import { PriceBadge } from "../ui/PriceBadge";
import { Rich } from "../ui/Rich";
import { Spots } from "../ui/Spots";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Frond className={cn("deco", styles.frond)} />
      <div className="container">
        <div className={styles.topline}>
          <span className={styles.kicker}>{hero.kicker}</span>
          <span className={cn("sticker tr", styles.date)}>{hero.date}</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.head}>
            <h1 className={styles.title}>
              <span className={cn("serif", styles.h1a)}>{hero.titleTop}</span>{" "}
              <span className={cn("script layer", styles.h1b)}>{hero.titleScript}</span>
            </h1>
            <p className={styles.sub}>
              <Rich text={hero.sub} />
            </p>
            <p className={cn("script", styles.by)}>{hero.by}</p>
          </div>

          <div className={styles.media}>
            <div className={styles.photoWrap}>
              <div className={styles.arch}>
                <Image
                  src={heroImg}
                  alt={hero.photoAlt}
                  fill
                  preload
                  placeholder="blur"
                  sizes="(min-width: 1024px) 460px, (min-width: 768px) 440px, 82vw"
                  className={styles.archImg}
                />
              </div>
              <Hibiscus className={cn("deco", styles.hib)} />
              <Spark className={cn("deco", styles.spark1)} />
              <Spark className={cn("deco", styles.spark2)} />
              <PriceBadge id="ring-hero" className={styles.badge} />
            </div>
          </div>

          <div className={styles.body}>
            <h2 className={styles.format}>
              <Rich text={hero.format} mark="hl-bg" />
            </h2>
            {hero.lead.map((paragraph) => (
              <p key={paragraph} className={styles.lead}>
                <Rich text={paragraph} />
              </p>
            ))}
            <p className={styles.deadline}>
              <Spark className={styles.deadlineIcon} />
              {price.earlyBird}
            </p>
            <CtaButton className={styles.cta}>
              {hero.cta}
            </CtaButton>
            <Spots align="start" />
          </div>
        </div>
      </div>
    </section>
  );
}
