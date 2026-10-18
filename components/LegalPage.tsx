import Link from "next/link";
import type { LegalDoc } from "@/content/legal";
import { course } from "@/content/legal";
import { cn } from "@/lib/cn";
import { Footer } from "./sections/Footer";
import { Rich } from "./ui/Rich";
import styles from "./LegalPage.module.css";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <main className={styles.page}>
        <div className={cn("container", styles.wrap)}>
          <Link href="/" className={styles.back}>
            ← На головну
          </Link>

          <article className={styles.card}>
            <p className={styles.kicker}>{course.name}</p>
            <h1 className={cn("serif", styles.title)}>{doc.title}</h1>
            <p className={styles.updated}>Оновлено: {doc.updated}</p>
            <p className={styles.intro}>
              <Rich text={doc.intro} />
            </p>

            {doc.sections.map((section, i) => (
              <section key={section.title} className={styles.section}>
                <h2>
                  <span className="tag">{i + 1}.</span> {section.title}
                </h2>
                {section.body.map((block, j) =>
                  typeof block === "string" ? (
                    <p key={j}>
                      <Rich text={block} />
                    </p>
                  ) : (
                    <ul key={j}>
                      {block.list.map((item) => (
                        <li key={item}>
                          <Rich text={item} />
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
