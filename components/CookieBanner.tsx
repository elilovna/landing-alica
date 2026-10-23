"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cookies } from "@/content/landing";
import { CONSENT_SETTINGS_EVENT, saveConsent, useConsent, type Consent } from "@/lib/consent";
import styles from "./CookieBanner.module.css";

/** Банер згоди на cookies. Показується, поки людина не вибрала, або з посилання у футері. */
export function CookieBanner() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const open = consent === null || reopened;

  useEffect(() => {
    const onOpen = () => setReopened(true);
    window.addEventListener(CONSENT_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_SETTINGS_EVENT, onOpen);
  }, []);

  // Верхній шар браузера: банер завжди поверх усього, зокрема бейджа Netlify в кутку
  useEffect(() => {
    const el = ref.current;
    if (open && el && "showPopover" in el && !el.matches(":popover-open")) el.showPopover();
  }, [open]);

  if (!open) return null;

  function choose(value: Consent) {
    saveConsent(value);
    setReopened(false);
  }

  return (
    <div
      ref={ref}
      popover="manual"
      role="region"
      aria-labelledby="cookie-banner-title"
      className={styles.banner}
    >
      <p id="cookie-banner-title" className={styles.title}>
        {cookies.title}
      </p>
      <p className={styles.text}>
        {cookies.text} <Link href="/privacy">{cookies.more}</Link>
      </p>
      {/* Обидві кнопки однакові: відмовитись має бути так само легко, як погодитись */}
      <div className={styles.actions}>
        <button type="button" className={styles.button} onClick={() => choose("granted")}>
          {cookies.accept}
        </button>
        <button type="button" className={styles.button} onClick={() => choose("denied")}>
          {cookies.reject}
        </button>
      </div>
    </div>
  );
}
