import type { Metadata, Viewport } from "next";
import { Manrope, Pacifico, Yeseva_One } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const script = Pacifico({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

const serif = Yeseva_One({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

const title = "Їж. Готуй. Не нервуй — онлайн-практикум Аліси Немиткіної";
const description =
  "Інтенсив для тих, хто задовбався вічно прибирати на кухні. 2 дні практики + 5 днів підтримки. Старт 26.10.";

export const metadata: Metadata = {
  // On Netlify, URL is the site's primary address (set automatically at build time).
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "http://localhost:3000",
  ),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "uk_UA",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ece2d5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${sans.variable} ${script.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
