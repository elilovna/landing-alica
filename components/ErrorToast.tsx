"use client";

import { useEffect, useState } from "react";
import { errors } from "@/content/landing";
import { ERROR_EVENT } from "@/lib/showError";
import styles from "./ErrorToast.module.css";

const HIDE_AFTER_MS = 6000;

type Toast = { id: number; message: string };

/** Спливаюче повідомлення про помилку зверху екрана. Викликається через showError(). */
export function ErrorToast() {
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    const onError = (event: Event) => {
      const message = (event as CustomEvent<string>).detail;
      setToast((prev) => ({ id: (prev?.id ?? 0) + 1, message }));
    };
    window.addEventListener(ERROR_EVENT, onError);
    return () => window.removeEventListener(ERROR_EVENT, onError);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), HIDE_AFTER_MS);
    return () => clearTimeout(timer);
  }, [toast]);

  if (!toast) return null;

  return (
    // key — щоб повторна помилка заново анімувалась і зачитувалась скрінрідером
    <div key={toast.id} role="alert" className={styles.toast}>
      <span className={styles.icon} aria-hidden="true">
        !
      </span>
      <p className={styles.message}>{toast.message}</p>
      <button
        type="button"
        className={styles.close}
        aria-label={errors.close}
        onClick={() => setToast(null)}
      >
        ×
      </button>
    </div>
  );
}
