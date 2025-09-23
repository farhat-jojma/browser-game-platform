"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ExpandableDescription({ html, previewChars = 300 }) {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations("expandable"); // ✅ new namespace

  const plainText = html.replace(/<[^>]+>/g, "");
  const preview = plainText.slice(0, previewChars);

  return (
    <div className="leading-relaxed text-muted-foreground space-y-3">
      <div
        dangerouslySetInnerHTML={{
          __html: expanded
            ? html
            : preview + (plainText.length > previewChars ? "..." : ""),
        }}
      />
      {plainText.length > previewChars && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-violet-600 hover:underline font-medium"
        >
          {expanded ? t("showLess") : t("showMore")}
        </button>
      )}
    </div>
  );
}
