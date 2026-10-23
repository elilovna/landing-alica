"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "@/lib/consent";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Піксель Meta (Facebook / Instagram). Вмикається лише після згоди в банері cookies.
 * Код пікселя — без змін, як його видає Meta. Блок <noscript> не потрібен:
 * без JavaScript людина не може дати згоду, тож відстежувати її не можна.
 */
export function MetaPixel() {
  const consent = useConsent();

  // Вибір змінили вже після того, як піксель завантажився
  useEffect(() => {
    if (!window.fbq) return;
    if (consent === "granted") window.fbq("consent", "grant");
    if (consent === "denied") {
      window.fbq("consent", "revoke");
      deleteCookies(["_fbp", "_fbc"]);
    }
  }, [consent]);

  if (consent !== "granted") return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1396601705796711');
fbq('track', 'PageView');`}
    </Script>
  );
}

/** Видаляє cookies пікселя з усіх рівнів домену, на яких Meta могла їх поставити. */
function deleteCookies(names: string[]) {
  const parts = location.hostname.split(".");
  const domains = parts.map((_, i) => parts.slice(i).join("."));
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
    }
  }
}
