"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { footer, nav, price } from "@/content/landing";
import { cn } from "@/lib/cn";
import { CheckoutLink } from "./ui/CheckoutLink";
import { CtaButton } from "./ui/CtaButton";
import { Spots } from "./ui/Spots";
import styles from "./Header.module.css";

/**
 * Верхнє швидке меню: посилання на блоки сторінки та кнопка оплати.
 * На вузьких екранах посилання ховаються в панель, що відкривається кнопкою-бургером.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Підсвічуємо в меню блок, який зараз посередині екрана
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Поки панель відкрита: сторінка під нею не прокручується, Escape і широкий екран її закривають
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const wide = window.matchMedia("(min-width: 1100px)");
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const onWide = () => wide.matches && setOpen(false);

    root.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header} data-open={open} data-scrolled={scrolled}>
      <div className={cn("container", styles.inner)}>
        <a href="#top" className={styles.brand} onClick={close}>
          <span className="serif">{footer.brand[0]}</span>
          <span className={cn("script", styles.brandScript)}>{footer.brand[1]}</span>
        </a>

        <nav aria-label={nav.label} className={styles.nav}>
          <ul>
            {nav.links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} aria-current={active === link.id ? "true" : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <p className={styles.price}>
            <strong>
              {price.now} {price.currency}
            </strong>{" "}
            <s>{price.was}</s>
          </p>
          <CheckoutLink className={styles.cta}>{nav.cta}</CheckoutLink>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu-panel"
            aria-label={open ? nav.close : nav.open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="menu-panel" className={styles.panel} inert={!open}>
        <div className="container">
          <nav aria-label={nav.label}>
            <ul className={styles.panelList}>
              {nav.links.map((link, i) => (
                <li key={link.id} style={{ "--i": i } as CSSProperties}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "true" : undefined}
                    onClick={close}
                  >
                    <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.panelFoot}>
            <p className={styles.panelPrice}>
              <strong>
                {price.now} {price.currency}
              </strong>{" "}
              <s>
                {price.was} {price.currency}
              </s>
            </p>
            <CtaButton className={styles.panelCta}>{nav.menuCta}</CtaButton>
            <Spots />
          </div>
        </div>
      </div>
    </header>
  );
}
