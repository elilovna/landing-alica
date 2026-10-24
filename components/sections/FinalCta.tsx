import Image from "next/image";
import finalImg from "@/assets/images/final.jpg";
import { finalCta } from "@/content/landing";
import { cn } from "@/lib/cn";
import { CtaButton } from "../ui/CtaButton";
import { Frond } from "../ui/Icons";
import { PriceBadge } from "../ui/PriceBadge";
import { Rich } from "../ui/Rich";
import { Spots } from "../ui/Spots";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={styles.final} id="final">
      <Frond className={cn("deco", styles.frond)} />
      <div className="container">
        <div className={styles.card}>
          <div className={styles.media}>
            <Image
              src={finalImg}
              alt={finalCta.photoAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className={styles.mediaImg}
            />
            <div className="halftone" />
            <h2 className={styles.title}>
              {finalCta.title[0]}
              <br />
              {finalCta.title[1]}
            </h2>
          </div>

          <div className={styles.content}>
            <p className={styles.text}>
              <Rich text={finalCta.text} />
            </p>
            <div className={styles.priceRow}>
              <PriceBadge tone="cream" />
            </div>
            <CtaButton id="final-cta" variant="cream" className={styles.cta}>
              {finalCta.cta}
            </CtaButton>
            <Spots tone="dark" align="start" />
          </div>
        </div>
      </div>
    </section>
  );
}
