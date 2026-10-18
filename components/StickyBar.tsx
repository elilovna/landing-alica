"use client";

import { useEffect, useState } from "react";
import { price, spots, stickyBar } from "@/content/landing";
import { CheckoutLink } from "./ui/CheckoutLink";
import styles from "./StickyBar.module.css";

/** Плаваюча панель з ціною: зʼявляється після першої кнопки і ховається біля фінального CTA. */
export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const finalSection = document.getElementById("final");
    if (!heroCta) return;

    let pastHero = false;
    let atFinal = false;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === heroCta) {
          pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        } else if (entry.target === finalSection) {
          atFinal = entry.isIntersecting;
        }
      }
      setVisible(pastHero && !atFinal);
    });

    observer.observe(heroCta);
    if (finalSection) observer.observe(finalSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.bar} data-visible={visible} inert={!visible}>
      <div className={styles.info}>
        <small>
          {spots.taken}/{spots.total} місць зайнято
        </small>
        <strong>
          {price.now} {price.currency} <s>{price.was}</s>
        </strong>
      </div>
      <CheckoutLink className={styles.cta}>{stickyBar.cta}</CheckoutLink>
    </div>
  );
}
