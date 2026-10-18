import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { refund } from "@/content/legal";

export const metadata: Metadata = {
  title: `${refund.title} — Їж. Готуй. Не нервуй`,
  alternates: { canonical: "/refund" },
};

export default function Page() {
  return <LegalPage doc={refund} />;
}
