import { site } from "@/content/landing";
import { cn } from "@/lib/cn";
import styles from "./Footer.module.css";

export function Footer() {
  const contacts = [
    site.instagram && {
      label: `@${site.instagram}`,
      href: `https://instagram.com/${site.instagram}`,
    },
    site.telegram && { label: `Telegram`, href: `https://t.me/${site.telegram}` },
    site.email && { label: site.email, href: `mailto:${site.email}` },
  ].filter((c): c is { label: string; href: string } => Boolean(c));

  return (
    <footer className={styles.footer}>
      <p className={cn("script", styles.name)}>{site.name}</p>
      {contacts.length > 0 && (
        <ul className={styles.contacts}>
          {contacts.map((c) => (
            <li key={c.href}>
              <a href={c.href}>{c.label}</a>
            </li>
          ))}
        </ul>
      )}
      <p className={styles.copy}>© 2026</p>
    </footer>
  );
}
