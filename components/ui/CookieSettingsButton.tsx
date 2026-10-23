"use client";

import { cookies } from "@/content/landing";
import { openConsentSettings } from "@/lib/consent";

/** Посилання у футері, яке знову відкриває банер cookies, щоб змінити вибір. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={openConsentSettings}>
      {cookies.settings}
    </button>
  );
}
