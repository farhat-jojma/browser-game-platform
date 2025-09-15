"use client";
import { useEffect, useState } from "react";

export default function AboutContent({ locale, fallbackText }) {
  const [html, setHtml] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      setError(false);
      try {
        const paths = [
          `/about/about.${locale}.html`,
          `/about/about.en.html`,
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

  if (html) {
    return (
      <article
        className="leading-relaxed text-muted-foreground space-y-3
          [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold
          [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold
          [&_a]:text-violet-400 hover:[&_a]:underline
          [&_img]:rounded-xl [&_img]:my-3"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  if (!html && !error) {
    return <p className="text-muted-foreground">Loading…</p>;
  }

  return <p className="text-muted-foreground">{fallbackText}</p>;
}
