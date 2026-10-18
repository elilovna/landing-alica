import Image from "next/image";
import faceImg from "@/assets/images/about-face.jpg";
import aboutImg from "@/assets/images/about.jpg";
import rulesImg from "@/assets/images/rules-face.jpg";
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

        <h2 className={cn("script layer", styles.rules)}>
          <span className={styles.ornament} aria-hidden="true">
            ~ ✦ ~
          </span>
          <span>{about.rules[0]}</span>
          <span className={styles.rulesLine2}>{about.rules[1]}</span>
          <span className={styles.ornament} aria-hidden="true">
            ~ ✦ ~
          </span>
        </h2>

        <div className={styles.duo}>
          <div>
            <h3 className={cn("serif", styles.quoteHead)}>
              <Rich text={about.psychTitle} />
            </h3>
            <div className={styles.quote}>
              <div className={styles.sun}>
                <div className={styles.sunBg} />
                <div className={styles.sunPhoto}>
                  <Image
                    src={rulesImg}
                    alt={about.psychPhotoAlt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 260px, 190px"
                    className={styles.cover}
                  />
                </div>
              </div>
              <div className={styles.marks} aria-hidden="true">
                “
              </div>
              <p>
                <Rich text={about.psychText} />
              </p>
            </div>
          </div>

          <div className={styles.haters}>
            <div className={styles.ring}>
              <div className={styles.ringPhoto}>
                <Image
                  src={faceImg}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 140px, 110px"
                  className={styles.cover}
                />
              </div>
              <svg viewBox="0 0 150 150" aria-hidden="true">
                <defs>
                  <path id="ring-haters" d="M75 75m-64 0a64 64 0 1 1 128 0" />
                </defs>
                <text className={styles.ringText} fontSize="17" letterSpacing="1">
                  <textPath href="#ring-haters" startOffset="8%">
                    {about.hatersRing}
                  </textPath>
                </text>
              </svg>
            </div>
            <p>
              <span className="sr-only">{about.hatersRing} </span>
              <Rich text={about.haters} />
            </p>
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
