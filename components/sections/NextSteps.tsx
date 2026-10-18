import Image from "next/image";
import nextImg from "@/assets/images/next-steps.jpg";
import { nextSteps } from "@/content/landing";
import { cn } from "@/lib/cn";
import { FlipFlop, Spark } from "../ui/Icons";
import { Rich } from "../ui/Rich";
import styles from "./NextSteps.module.css";

export function NextSteps() {
  return (
    <section className="section" id="next-steps">
      <div className={cn("container", styles.grid)}>
        <div className={styles.head}>
          <h2>
            <span className={cn("script layer-light", styles.title)}>{nextSteps.title}</span>{" "}
            <span className={cn("sticker soft tl", styles.stk1)}>{nextSteps.stickers[0]}</span>{" "}
            <span className={cn("sticker soft tr", styles.stk2)}>{nextSteps.stickers[1]}</span>
          </h2>
          <figure className={styles.polaroid}>
            <div>
              <Image
                src={nextImg}
                alt={nextSteps.photoAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 240px, 45vw"
                className={styles.polaroidImg}
              />
            </div>
          </figure>
          <FlipFlop className={cn("deco", styles.flipflop)} />
          <Spark className={cn("deco", styles.spark)} />
        </div>

        <ol className={styles.steps}>
          {nextSteps.steps.map((step, i) => (
            <li key={step.title}>
              <span className="tag">№{i + 1}.</span>
              <div>
                <h3>{step.title}</h3>
                <p>
                  <Rich text={step.text} mark="hl-bg" />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
