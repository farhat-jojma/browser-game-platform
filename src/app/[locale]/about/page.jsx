"use client";

export const runtime = 'edge';
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      <p>
        {t.rich("intro", {
          strong: (chunks) => <strong className="font-bold">{chunks}</strong>
        })}
      </p>
    </main>
  );
}
