import { useSyncExternalStore } from "react";

/**
 * Згода на рекламні cookies (піксель Meta). Вибір зберігається в цьому браузері.
 * Поки людина нічого не вибрала, піксель не завантажується.
 */
export type Consent = "granted" | "denied";

const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "landing:consent";
export const CONSENT_SETTINGS_EVENT = "landing:consent-settings";

// Запасний варіант, якщо браузер не дає писати в localStorage (приватний режим тощо)
let memory: Consent | null = null;

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    // localStorage недоступний — беремо вибір з памʼяті
  }
  return memory;
}

export function saveConsent(value: Consent) {
  memory = value;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // localStorage недоступний — вибір діятиме до перезавантаження сторінки
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange); // вибір в іншій вкладці
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** null — людина ще не вибрала; undefined — сторінка ще не прочитала вибір (на сервері). */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(subscribe, readConsent, () => undefined);
}

/** Знову показує банер cookies, щоб змінити вибір (посилання у футері). */
export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}
