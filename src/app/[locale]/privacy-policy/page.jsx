import { useTranslations } from "next-intl";

export const metadata = {
  title: "privacy.meta.title",
  description: "privacy.meta.description"
};

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      <p>{t("intro")}</p>

      <h2 className="text-xl font-bold mt-6">{t("section1.title")}</h2>
      <p>{t("section1.content")}</p>

      <h2 className="text-xl font-bold mt-6">{t("section2.title")}</h2>
      <p>{t("section2.content")}</p>
    </main>
  );
}
