import Hero from "./components/hero/Hero";
import data from "../../data/games.json";
import RowCarousel from "./components/rowcarousel/RowCarousel";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

// ISR: revalidate homepage every hour
export const revalidate = 3600;

// utils
function slugsToItems(slugs = [], games = {}) {
  return slugs
    .map((slug) => {
      const g = games[slug];
      if (!g) return null;
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

export default async function Pages({ params }) {
  // ✅ Server-side translations
  const t = await getTranslations({ locale: params.locale });
  const sections = buildSections(data, t);

  // ✅ Prepare carousel labels once, pass to child
  const tCarousel = {
    viewMore: t("carousel.viewMore"),
    previous: t("carousel.previous"),
    next: t("carousel.next"),
  };

  return (
    <div className="space-y-10">
      {/* ✅ Preload Hero image */}
      <Image
        src="/hero.webp"
        alt="Hero"
        width={1200}
        height={600}
        priority
        className="hidden"
      />

      {/* === First 5 sections === */}
      {sections.slice(0, 5).map((section) => (
        <RowCarousel
          key={section.id}
          title={section.title}
          items={section.items}
          viewMoreHref={`/section/${section.id}`}
          labels={tCarousel}
        />
      ))}

      {/* === Hero as 6th === */}
      <Hero />

      {/* === Remaining sections === */}
      {sections.slice(5).map((section) => (
        <RowCarousel
          key={section.id}
          title={section.title}
          items={section.items}
          viewMoreHref={`/section/${section.id}`}
          labels={tCarousel}
        />
      ))}
    </div>
  );
}
