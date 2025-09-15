// page.jsx (server)
import { getTranslations } from "next-intl/server";
import PrivacyContent from "./PrivacyContent";

export default async function PrivacyPolicyPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      <PrivacyContent
        locale={locale}
        fallbackIntro={t("intro")}
        section1={{
          title: t("section1.title"),
          content: t("section1.content"),
        }}
        section2={{
          title: t("section2.title"),
          content: t("section2.content"),
        }}
      />
    </main>
  );
}
