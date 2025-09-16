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
      // ✅ Utiliser clé directe au lieu de t.raw
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
    {
      id: "featured",
      title: t("home.sections.featured", { default: "Featured" }),
      items: all.slice(0, 6),
    },
    {
      id: "new",
      title: t("home.sections.new", { default: "New" }),
      items: all.slice(6, 12),
    },
  ];
}

export default async function Pages({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const sections = buildSections(data, t);

  // ✅ appeler clés directes
  const tCarousel = {
    viewMore: t("carousel.viewMore", { default: "View more" }),
    previous: t("carousel.previous", { default: "Previous" }),
    next: t("carousel.next", { default: "Next" }),
  };

  return (
    <div className="space-y-10">
      <Image
        src="/favicon.png"
        alt="Hero"
        width={1200}
        height={600}
        priority
        className="hidden"
      />

      {sections.slice(0, 5).map((section) => (
        <RowCarousel
          key={section.id}
          title={section.title}
          items={section.items}
          viewMoreHref={`/section/${section.id}`}
          labels={tCarousel}
        />
      ))}

      <Hero />

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
