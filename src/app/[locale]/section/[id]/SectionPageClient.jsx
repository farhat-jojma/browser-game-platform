"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import SimpleGameCard from "../../components/gamecard/SimpleGameCard";
import data from "../../../../data/games.json";
import { useTranslations, useLocale } from "next-intl";

// Build items from a list of slugs using games.json
function slugsToItems(slugs = [], games = {}, locale) {
  return slugs
    .map((slug) =>
      games[slug]
        ? { id: slug, url: `/${locale}/game/${slug}`, ...games[slug] }
        : null
    )
    .filter(Boolean);
}

export default function SectionPageClient({ id }) {
  const t = useTranslations("section");
  const locale = useLocale();

  const games = data?.games ?? {};
  const fromJson = data?.sections?.[id];
  let items;

  if (Array.isArray(fromJson)) {
    items = slugsToItems(fromJson, games, locale);
  } else {
    const all = Object.entries(games).map(([slug, g]) => ({
      id: slug,
      url: `/${locale}/game/${slug}`,
      ...g,
    }));
    if (id === "featured") items = all.slice(0, 24);
    else if (id === "new") items = all.slice(24, 48);
    else items = all; // fallback
  }

  if (!items || items.length === 0) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">
          {t(`titles.${id}`, { default: id })}
        </h1>
        <Link
          href={`/${locale}`}
          className="text-sm text-foreground/70 hover:text-foreground"
        >
          {t("backHome")}
        </Link>
      </div>

      {/* Grid of games */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {items.map((game) => (
          <SimpleGameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
