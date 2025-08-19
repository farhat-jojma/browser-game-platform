import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GamePlayer from "../../components/GamePlayer";
import data from "../../../data/games.json";

// ⬇️ NEW: read description HTML from /public
import path from "node:path";
import { promises as fs } from "node:fs";

export async function generateStaticParams() {
  return Object.keys(data?.games ?? {}).map((slug) => ({ slug }));
}

// ⬇️ NEW: helper to load HTML
async function loadDescriptionHTML(descField) {
  if (!descField) return null;

  // If JSON already contains HTML, just return it
  const trimmed = String(descField).trim();
  if (trimmed.startsWith("<")) return trimmed;

  // Otherwise treat it as a path inside /public (absolute or relative)
  const rel = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;
  const full = path.join(process.cwd(), "public", rel);

  try {
    const html = await fs.readFile(full, "utf8");
    return html;
  } catch {
    return null; // file not found → we'll show a fallback
  }
}

export default async function GamePage({ params }) {
  const { slug } = params;
  const game = data?.games?.[slug];
  if (!game) return notFound();

  const playerSrc = game.playPath || `/games/${slug}/index.html`;

  const moreGames = Object.entries(data.games)
    .filter(([s]) => s !== slug)
    .slice(0, 8)
    .map(([s, g]) => ({ slug: s, ...g }));

  // ⬇️ NEW: load the description HTML (file or inline)
  const descHTML = await loadDescriptionHTML(game.description);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">{game.title}</h1>
        <span className="text-sm text-white/60">{game.genre}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-4">
          <GamePlayer src={playerSrc} title={game.title} />

          {/* ⬇️ UPDATED: rich description from HTML */}
          <section className="mt-2">
            <h2 className="text-lg font-semibold mb-3">About {game.title}</h2>

            {descHTML ? (
              // Style common HTML tags without requiring typography plugin
              <article className="leading-relaxed text-white/80 space-y-3
                                  [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold
                                  [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold
                                  [&_a]:text-violet-400 hover:[&_a]:underline
                                  [&_img]:rounded-xl [&_img]:my-3">
                <div dangerouslySetInnerHTML={{ __html: descHTML }} />
              </article>
            ) : (
              <p className="text-white/75">
                {game.shortDescription || "No description available yet."}
              </p>
            )}
          </section>
        </div>

        <aside className="lg:sticky lg:top-20 h-max">
          <h3 className="text-sm font-semibold text-white/70 uppercase mb-3">More games</h3>
          <div className="space-y-2">
            {moreGames.map((g) => (
              <Link key={g.slug} href={`/game/${g.slug}`} className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/5 transition">
                <div className="relative w-24 min-w-24 aspect-video rounded-md overflow-hidden bg-white/5">
                  <Image src={g.image} alt={g.title} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="font-medium leading-tight truncate">{g.title}</div>
                  <div className="text-xs text-white/50">{g.genre}</div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
