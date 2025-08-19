import Link from "next/link";
import { notFound } from "next/navigation";
import SimpleGameCard from "../../components/SimpleGameCard";
import data from "../../../data/games.json"; // <- JSON source

// Build items from a list of slugs using games.json
function slugsToItems(slugs = [], games = {}) {
  return slugs
    .map((slug) => (games[slug] ? { id: slug, url: `/game/${slug}`, ...games[slug] } : null))
    .filter(Boolean);
}

// Human title from id
const toTitle = (s) =>
  String(s).replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

// Prebuild static paths for the section ids you have
export async function generateStaticParams() {
  const ids = Object.keys(data?.sections ?? { featured: [], new: [] });
  return ids.map((id) => ({ id }));
}

// Optional: better tab title
export function generateMetadata({ params }) {
  const id = params.id;
  const title = `${toTitle(id)} – Games`;
  return { title };
}

export default function SectionPage({ params }) {
  const id = params.id;

  const games = data?.games ?? {};

  // 1) If JSON has an explicit sections map, use it
  const fromJson = data?.sections?.[id];
  let items;

  if (Array.isArray(fromJson)) {
    items = slugsToItems(fromJson, games);
  } else {
    // 2) Fallbacks if no sections block exists:
    const all = Object.entries(games).map(([slug, g]) => ({
      id: slug,
      url: `/game/${slug}`,
      ...g,
    }));
    if (id === "featured") items = all.slice(0, 24);
    else if (id === "new") items = all.slice(24, 48);
    else items = all; // unknown section → show all
  }

  if (!items || items.length === 0) {
    // Section id not found or empty → 404
    return notFound();
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">{toTitle(id)}</h1>
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← Back to home
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
