import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: `${privacy.title} — Їж. Готуй. Не нервуй`,
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <LegalPage doc={privacy} />;
}
