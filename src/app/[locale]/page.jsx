"use client";
import Hero from "./components/hero/Hero";
import data from "../../data/games.json";
import RowCarousel from "./components/rowcarousel/RowCarousel";
import { useTranslations } from "next-intl";
import Head from "next/head"; // ✅ pour insérer preload

// utils inside page.jsx
function slugsToItems(slugs = [], games = {}) {
  return slugs
    .map((slug) => {
      const g = games[slug];
      if (!g) {
        if (process.env.NODE_ENV !== "production") {
          console.warn(`[pages] Missing game in games.json: ${slug}`);
        }
        return null;
      }
      return { id: slug, url: `/game/${slug}`, ...g };
    })
    .filter(Boolean);
}

function buildSections(json, t) {
  const games = json?.games ?? {};

  if (json?.sections && typeof json.sections === "object") {
    return Object.entries(json.sections).map(([id, slugs]) => ({
      id,
      title: t(`home.sections.${id}`, { default: id }),
      items: slugsToItems(slugs, games),
    }));
  }

  const all = Object.entries(games).map(([slug, g]) => ({
    id: slug,
    url: `/game/${slug}`,
    ...g,
  }));

  return [
    { id: "featured", title: t("home.sections.featured"), items: all.slice(0, 6) },
    { id: "new", title: t("home.sections.new"), items: all.slice(6, 12) },
  ];
}

export default function Pages() {
  const t = useTranslations();
  const sections = buildSections(data, t);

  return (
    <>
      {/* ✅ Preload Hero image (remplace hero.webp par ton vrai fichier) */}
      <Head>
        <link rel="preload" as="image" href="/hero.webp" />
      </Head>

      <div className="space-y-10">
        {/* === Game Carousels (les 5 premiers) === */}
        {sections.slice(0, 5).map((section) => (
          <RowCarousel
            key={section.id}
            title={section.title}
            items={section.items}
            viewMoreHref={`/section/${section.id}`}
          />
        ))}

        {/* === Hero en 6ème === */}
        <Hero />

        {/* === Le reste des sections === */}
        {sections.slice(5).map((section) => (
          <RowCarousel
            key={section.id}
            title={section.title}
            items={section.items}
            viewMoreHref={`/section/${section.id}`}
          />
        ))}
      </div>
    </>
  );
}
