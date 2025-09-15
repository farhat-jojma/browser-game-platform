import { getTranslations } from "next-intl/server";
import AboutContent from "./AboutContent";

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      <AboutContent locale={locale} fallbackText={t("intro")} />
    </main>
  );
}
