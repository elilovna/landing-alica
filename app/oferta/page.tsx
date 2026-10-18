import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { oferta } from "@/content/legal";

export const metadata: Metadata = {
  title: `${oferta.title} — Їж. Готуй. Не нервуй`,
  alternates: { canonical: "/oferta" },
};

export default function Page() {
  return <LegalPage doc={oferta} />;
}
