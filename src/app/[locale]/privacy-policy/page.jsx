"use client";

export const runtime = "edge";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";

  const [html, setHtml] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      setError(false);
      try {
        const paths = [
          `/privacy/privacy.${locale}.html`,
          `/privacy/privacy.en.html`
        ];
        let content = "";
        for (const p of paths) {
          const res = await fetch(p, { cache: "no-store" });
          if (res.ok) {
            content = await res.text();
            break;
          }
        }
        if (!isMounted) return;
        if (content) setHtml(content);
        else setError(true);
      } catch {
        if (!isMounted) return;
        setError(true);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, [locale]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      {html && (
        <article
          className="leading-relaxed text-muted-foreground space-y-3
            [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold
            [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold
            [&_a]:text-violet-400 hover:[&_a]:underline
            [&_img]:rounded-xl [&_img]:my-3"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      {!html && !error && (
        <p className="text-muted-foreground">Loading…</p>
      )}
      {!html && error && (
        <>
          <p>{t("intro")}</p>
          <h2 className="text-xl font-bold mt-6">{t("section1.title")}</h2>
          <p>{t("section1.content")}</p>
          <h2 className="text-xl font-bold mt-6">{t("section2.title")}</h2>
          <p>{t("section2.content")}</p>
        </>
      )}
    </main>
  );
}
