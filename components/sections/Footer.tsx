import Link from "next/link";
import { legalDocs, seller } from "@/content/legal";
import { footer, site } from "@/content/landing";
import { cn } from "@/lib/cn";
import styles from "./Footer.module.css";

export function Footer() {
  const contacts = [
    site.email && { label: site.email, href: `mailto:${site.email}` },
    site.instagram && {
      label: `@${site.instagram}`,
      href: `https://instagram.com/${site.instagram}`,
    },
    site.telegram && { label: "Telegram", href: `https://t.me/${site.telegram}` },
  ].filter((c): c is { label: string; href: string } => Boolean(c));

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.inner)}>
        <div className={styles.top}>
          <div>
            <p className={styles.brand}>
              <span className="serif">{footer.brand[0]}</span>
              <span className={cn("script", styles.brandScript)}>{footer.brand[1]}</span>
            </p>
            <p className={styles.meta}>{footer.meta}</p>
            {contacts.length > 0 && (
              <ul className={styles.contacts}>
                {contacts.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.pay}>
            <ul className={styles.payMarks} aria-label="Способи оплати">
              {footer.payments.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className={styles.payNote}>{footer.paymentsNote}</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <nav aria-label="Документи">
            <ul className={styles.legal}>
              {legalDocs.map((doc) => (
                <li key={doc.slug}>
                  <Link href={`/${doc.slug}`}>{doc.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className={styles.copy}>
            © 2026 {site.name}. {footer.rights}
            <br />
            {seller.company} · CVR {seller.cvr}
          </p>
        </div>
      </div>
    </footer>
  );
}
