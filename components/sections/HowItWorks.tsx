import Image from "next/image";
import howImg from "@/assets/images/how.jpg";
import resultImg from "@/assets/images/result.jpg";
import { how } from "@/content/landing";
import { cn } from "@/lib/cn";
import { CtaButton } from "../ui/CtaButton";
import { Arrow, Spark } from "../ui/Icons";
import { PriceBadge } from "../ui/PriceBadge";
import { Rich } from "../ui/Rich";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section className={cn("section", styles.how)} id="how">
      <div className="container">
        <div className={styles.top}>
          <h2 className={cn("script layer-light", styles.title)}>
            {how.title[0]}
            <br />
            {how.title[1]}
          </h2>

          <figure className={styles.media}>
            <div className={styles.banner}>
              <Image
                src={howImg}
                alt={how.photoAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 460px, 100vw"
                className={styles.bannerImg}
              />
              <div className={styles.dots} />
            </div>
            <span className={cn("tag", styles.mediaTag)}>{how.tag}</span>
          </figure>

          <ol className={styles.list}>
            {how.items.map((item, i) => (
              <li key={item.title}>
                <span className="tag">№{i + 1}.</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    <Rich text={item.text} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.resultRow}>
          <div className={styles.result}>
            <p className={cn("script layer", styles.stamp)}>
              {how.resultStamp[0]}
              <br />
              {how.resultStamp[1]}
            </p>
            <Spark className={cn("deco", styles.spark1)} />
            <Spark className={cn("deco", styles.spark2)} />
            <p className={styles.card}>
              <Rich text={how.result} />
            </p>
          </div>
          <figure className={styles.polaroid}>
            <div>
              <Image
                src={resultImg}
                alt={how.resultPhotoAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 340px, 70vw"
                className={styles.polaroidImg}
              />
            </div>
          </figure>
        </div>

        <div className={styles.offer}>
          <h3 className={cn("serif", styles.offerTitle)}>
            <Rich text={how.offer} />
          </h3>
          <Arrow className={styles.arrow} />
          <PriceBadge className={styles.badge} />
        </div>
        <CtaButton className={styles.cta}>{how.cta}</CtaButton>
      </div>
    </section>
  );
}
