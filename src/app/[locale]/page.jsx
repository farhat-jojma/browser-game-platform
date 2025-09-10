import Hero from "./components/hero/Hero";
import data from "../../data/games.json";
import RowCarousel from "./components/rowcarousel/RowCarousel";
import { useTranslations} from "next-intl";

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
    <div className="space-y-10">
      {/* === SEO Hero Section === */}
      <Hero />

      {/* === Game Carousels === */}
      {sections.map((section) => (
        <RowCarousel
          key={section.id}
          title={section.title}
          items={section.items}
          viewMoreHref={`/section/${section.id}`}
        />
      ))}
    </div>
  );
}
