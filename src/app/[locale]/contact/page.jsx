import { useTranslations } from "next-intl";

export const metadata = {
  title: "contact.meta.title",
  description: "contact.meta.description"
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      <p>{t("intro")}</p>
      <ul className="list-disc list-inside space-y-2">
        <li>{t("email")}: <a href="mailto:support@browsergameplatform.com" className="text-violet-500 hover:underline">support@browsergameplatform.com</a></li>
        <li>{t("phone")}: +212 600 000 000</li>
      </ul>
    </main>
  );
}
