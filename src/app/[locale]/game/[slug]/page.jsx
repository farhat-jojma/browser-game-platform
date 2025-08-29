import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GamePlayer from "../../components/gameplayer/GamePlayer";
import MoreGameThumb from "../../components/gameplayer/MoreGameThumb";
import data from "../../../../data/games.json";

import path from "node:path";
import { promises as fs } from "node:fs";
import { getTranslations } from "next-intl/server";

// Simple genre -> gradient mapping (matches home card style)
const GENRE_GRADIENT = {
  Arcade:      "from-amber-300 to-amber-500",
  Puzzle:      "from-sky-300 to-sky-500",
  Racing:      "from-fuchsia-300 to-fuchsia-500",
  Driving:     "from-emerald-300 to-emerald-500",
  Multiplayer: "from-violet-300 to-violet-600",
  Sports:      "from-orange-300 to-orange-500",
  Action:      "from-rose-300 to-rose-500",
  Adventure:   "from-indigo-300 to-indigo-600",
  Shooter:     "from-red-300 to-red-500",
  Brain:       "from-lime-300 to-lime-500",
  Merge:       "from-teal-300 to-teal-500",
  Stack:       "from-cyan-300 to-cyan-500",
  Platformer:  "from-yellow-300 to-yellow-500",
  Strategy:    "from-slate-300 to-slate-600",
  Retro:       "from-pink-300 to-pink-500",
  Kids:        "from-green-300 to-green-500",
  Bike:        "from-green-300 to-green-500",
  Card:        "from-purple-300 to-purple-500"
};

function gradientForGenre(genre) {
  if (!genre) return "from-amber-300 to-amber-500";
  if (GENRE_GRADIENT[genre]) return GENRE_GRADIENT[genre];
  const k = Object.keys(GENRE_GRADIENT).find(
    (x) => x.toLowerCase() === String(genre).toLowerCase()
  );
  return k ? GENRE_GRADIENT[k] : "from-amber-300 to-amber-500";
}

// Lire fichier description HTML
async function loadDescriptionHTML(descField, locale) {
  if (!descField) return null;

  // on ajoute .en.html ou .fr.html
  const rel = descField.endsWith(".html")
    ? descField
    : `${descField}.${locale}.html`;

  const trimmed = String(rel).trim();

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    try {
      const res = await fetch(trimmed, { cache: "no-store" });
      if (!res.ok) return null;
      return await res.text();
    } catch {
      return null;
    }
  }

  const full = path.join(process.cwd(), "public", trimmed.startsWith("/") ? trimmed.slice(1) : trimmed);
  try {
    return await fs.readFile(full, "utf8");
  } catch {
    return null;
  }
}

// Générer les slugs statiques
export async function generateStaticParams() {
  return Object.keys(data?.games ?? {}).map((slug) => ({ slug }));
}

export default async function GamePage({ params }) {
  const { slug, locale } = await params;   // ✅ fix ici
  const game = data?.games?.[slug];
  if (!game) return notFound();

  const t = await getTranslations({ locale, namespace: "game" });

  // ✅ si playPath est une URL externe → garder telle quelle
  // ✅ sinon → charger depuis /public/games/[slug]/index.html
  const playerSrc = game.playPath?.startsWith("http")
    ? game.playPath
    : `/games/${slug}/index.html`;

  const coverSrc = game.cover || game.banner || game.backdrop || game.image;

  const moreGames = Object.entries(data.games)
    .filter(([s]) => s !== slug)
    .slice(0, 8)
    .map(([s, g]) => ({ slug: s, ...g }));

  const descHTML = await loadDescriptionHTML(game.description, locale);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-foreground">{game.title}</h1>
        <span className="text-sm text-muted-foreground">{game.genre}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-4">
          {/* GamePlayer */}
          <GamePlayer src={playerSrc} title={game.title} coverSrc={coverSrc} />

          {/* Description */}
          <section className="mt-2">
            <h2 className="text-lg font-semibold mb-3">
              {t("about", { title: game.title })}
            </h2>

            {descHTML ? (
              <article
                className="leading-relaxed text-muted-foreground space-y-3
                  [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold
                  [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold
                  [&_a]:text-violet-400 hover:[&_a]:underline
                  [&_img]:rounded-xl [&_img]:my-3"
              >
                <div dangerouslySetInnerHTML={{ __html: descHTML }} />
              </article>
            ) : (
              <p className="text-muted-foreground">{t("noDescription")}</p>
            )}
          </section>
        </div>

        {/* More games */}
        <aside className="lg:sticky lg:top-20 h-max">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
            {t("moreGames")}
          </h3>
          <div className="space-y-2">
            {moreGames.map((g) => (
              <Link
                key={g.slug}
                href={`/${locale}/game/${g.slug}`}
                className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/5 transition"
              >
                <MoreGameThumb image={g.image} title={g.title} genre={g.badgeGenre || g.genre} />
                <div className="min-w-0">
                  <div className="font-medium leading-tight truncate text-foreground">
                    {g.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{g.genre}</div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
