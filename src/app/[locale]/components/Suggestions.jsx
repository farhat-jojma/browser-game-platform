"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Suggestions({ items = [] }) {
  const t = useTranslations("suggestions");

  if (!items.length) return null;

  return (
    <div className="mt-8 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">
        {t("title")}
      </h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {items.map((item, idx) => (
          <li key={idx} className="rounded-lg bg-white/10 hover:bg-white/20 transition">
            <Link href={item.href} className="block p-4 text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
