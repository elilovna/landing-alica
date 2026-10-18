import { forWhom } from "@/content/landing";
import { cn } from "@/lib/cn";
import { CtaButton } from "../ui/CtaButton";
import { Check, Hibiscus, Spark } from "../ui/Icons";
import { Rich } from "../ui/Rich";
import styles from "./ForWhom.module.css";

export function ForWhom() {
  return (
    <section className="section" id="for-whom">
      <div className={cn("container", styles.grid)}>
        <div>
          <h2 className={cn("serif", styles.title)}>
            <Rich text={forWhom.title} />
          </h2>
          <ul className={styles.checks}>
            {forWhom.items.map((item) => (
              <li key={item}>
                <Check className={styles.check} />
                <span>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.aside}>
          <div className={styles.answer}>
            <p className={cn("script layer", styles.stamp)}>
              {forWhom.answerStamp}{" "}
              <span className={cn("tag", styles.stampTag)}>{forWhom.answerTag}</span>
            </p>
            <Hibiscus className={cn("deco", styles.hib)} />
            <ul className={styles.answers}>
              {forWhom.answers.map((item) => (
                <li key={item}>
                  <Spark className={styles.spark} />
                  <span>
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <CtaButton className={styles.cta}>{forWhom.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
