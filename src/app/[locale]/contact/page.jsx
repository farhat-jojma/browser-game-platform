// contact/page.jsx (server)
import ContactContent from "./ContactContent";
import { getTranslations } from "next-intl/server";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      <ContactContent locale={locale} fallbackText={t("intro")} />
    </main>
  );
}
