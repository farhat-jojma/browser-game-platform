import { useTranslations } from "next-intl";

export const metadata = {
  title: "terms.meta.title",
  description: "terms.meta.description"
};

export default function TermsOfServicePage() {
  const t = useTranslations("terms");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      <p>{t("intro")}</p>
      <ul className="list-decimal list-inside space-y-2">
        {t.raw("items").map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
