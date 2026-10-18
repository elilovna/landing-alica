import Image from "next/image";
import faceImg from "@/assets/images/about-face.jpg";
import aboutImg from "@/assets/images/about.jpg";
import sunImg from "@/assets/images/rules-face.jpg";
import { about } from "@/content/landing";
import { cn } from "@/lib/cn";
import { Hibiscus, Spark } from "../ui/Icons";
import { Rich } from "../ui/Rich";
import styles from "./About.module.css";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.text}>
            <p className={styles.hi}>{about.hi}</p>
            <h2 className={cn("script layer", styles.name)}>
              {about.name.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <ul className={styles.bio}>
              {about.bio.map((line) => (
                <li key={line}>
                  <Spark className={styles.bioIcon} />
                  <span>
                    <Rich text={line} />
                  </span>
                </li>
              ))}
            </ul>
            <figure className={styles.profile}>
              <Image
                src={about.profile.src}
                alt={about.profile.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 560px, 92vw"
              />
            </figure>
          </div>

          <figure className={styles.photo}>
            <div className={styles.photoFrame}>
              <Image
                src={aboutImg}
                alt={about.photoAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 440px, (min-width: 768px) 420px, 78vw"
                className={cn(styles.cover, styles.photoImg)}
              />
            </div>
            <Hibiscus className={cn("deco", styles.photoHib)} />
            <Spark className={cn("deco", styles.photoSpark)} />
          </figure>

          <div className={styles.facts}>
            <h3 className={cn("sticker soft tr", styles.factsTitle)}>{about.factsTitle}</h3>
            <div className={styles.factsInner}>
              <ol>
                {about.facts.map((fact, i) => (
                  <li key={fact} className={styles.fact}>
                    <div className={styles.factLabel}>
                      <span className={cn(styles.label, i % 2 ? "tr" : "tl")}>Факт {i + 1}</span>
                    </div>
                    <p>
                      <Rich text={fact} />
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <Spark className={cn("deco", styles.factsSpark)} />
          </div>
        </div>

        <div className={styles.objection}>
          <h2 className={cn("serif", styles.objectionTitle)}>
            <Rich text={about.objection.title} />
          </h2>

          <div className={styles.duo}>
            <div className={styles.quote}>
              <div className={styles.sun}>
                <div className={styles.sunBg} />
                <div className={styles.sunPhoto}>
                  <Image
                    src={sunImg}
                    alt={about.objection.photoAlt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 170px, 140px"
                    className={styles.cover}
                  />
                </div>
              </div>
              <p className={cn("script layer", styles.stamp)}>{about.objection.stamp}</p>
              <p className={styles.quoteText}>
                <Rich text={about.objection.answer} />
              </p>
            </div>

            <div className={styles.course}>
              <div className={styles.ring}>
                <div className={styles.ringPhoto}>
                  <Image
                    src={faceImg}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 180px, (min-width: 768px) 160px, 130px"
                    className={styles.cover}
                  />
                </div>
              </div>
              <p>
                <span className={cn("sticker tl", styles.courseTag)}>{about.objection.courseTag}</span>{" "}
                <Rich text={about.objection.outcome} />
              </p>
            </div>
          </div>
        </div>

        <div className={styles.share}>
          <Spark className={cn("deco", styles.shareSpark)} />
          <Hibiscus className={cn("deco", styles.shareHib)} />
          <p className={styles.shareLead}>
            <Rich text={about.shareLead} />
          </p>
          <p className={styles.stickers}>
            {about.shareStickers.map((row, r) => (
              <span key={r} className={styles.stickerRow}>
                {row.map((word, i) => (
                  <span key={word} className={cn("sticker", (r + i) % 2 ? "tr" : "tl")}>
                    {word}
                  </span>
                ))}
              </span>
            ))}
          </p>
          <p className={styles.shareText}>
            <Rich text={about.shareText} />
          </p>
        </div>
      </div>
    </section>
  );
}
