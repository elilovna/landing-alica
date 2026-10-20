"use client";

import type { ComponentProps, MouseEvent } from "react";
import { errors, site } from "@/content/landing";
import { showError } from "@/lib/showError";

type Props = Omit<ComponentProps<"a">, "href" | "onClick">;

/**
 * Посилання на оплату: відкривається в новій вкладці, щоб лендінг лишався відкритим.
 * Перед переходом перевіряє, що оплата доступна, інакше показує помилку.
 */
export function CheckoutLink(props: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    try {
      if (!/^https?:\/\//.test(site.checkoutUrl)) {
        event.preventDefault();
        console.warn("site.checkoutUrl у content/landing.ts не заповнений:", site.checkoutUrl);
        showError(errors.checkoutUnavailable);
      } else if (!navigator.onLine) {
        event.preventDefault();
        showError(errors.offline);
      }
    } catch (error) {
      event.preventDefault();
      console.error(error);
      showError(errors.generic);
    }
  }

  return (
    <a {...props} href={site.checkoutUrl} target="_blank" rel="noopener" onClick={handleClick} />
  );
}
