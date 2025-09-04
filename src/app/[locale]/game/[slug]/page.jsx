import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GamePlayer from "../../components/gameplayer/GamePlayer";
import MoreGameThumb from "../../components/gameplayer/MoreGameThumb";
import data from "../../../../data/games.json";

import path from "node:path";
import { promises as fs } from "node:fs";
import { getTranslations } from "next-intl/server";

export const runtime = "nodejs";

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

// Simple in-place shuffle copy
function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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

// Dynamic metadata for game pages
// Dynamic metadata for game pages
export async function generateMetadata({ params }) {
  const { slug, locale } = await params; // ✅ fix

  const game = data?.games?.[slug];
  if (!game) {
    return { title: "Game Not Found" };
  }

  try {
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    const title = game.title;
    const description = game.description
      ? `${game.title} - ${game.genre} game. ${messages?.metadata?.description || "Play browser games online for free!"}`
      : messages?.metadata?.description || "Play browser games online for free!";

    return { title, description };
  } catch {
    return {
      title: game.title,
      description: `${game.title} - ${game.genre} game. Play browser games online for free!`,
    };
  }
}

export default async function GamePage({ params }) {
  const { slug, locale } = await params; // ✅ fix

  const game = data?.games?.[slug];
  if (!game) return notFound();

  const t = await getTranslations({ locale, namespace: "game" });


  // ✅ si playPath est une URL externe → garder telle quelle
  // ✅ sinon → charger depuis /public/games/[slug]/index.html
  const playerSrc = game.playPath?.startsWith("http")
    ? game.playPath
    : `/games/${slug}/index.html`;

  const coverSrc = game.cover || game.banner || game.backdrop || game.image;

  const allOtherGames = Object.entries(data.games)
    .filter(([s]) => s !== slug)
    .map(([s, g]) => ({ slug: s, ...g }));

  // Create three non-overlapping randomized groups for mobile
  const shuffled = shuffleArray(allOtherGames);
  const moreGamesTop = shuffled.slice(0, 8);
  const moreGamesBottom = shuffled.slice(8, 16);
  const moreGamesList = shuffled.slice(16, 32);

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

          {/* More games - mobile carousel (top) */}
          <section className="lg:hidden">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
              {t("moreGames")}
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
              {moreGamesTop.map((g) => (
                <Link
                  key={g.slug}
                  href={`/${locale}/game/${g.slug}`}
                  className="shrink-0 snap-start w-40"
                >
                  <div className="relative w-40 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={g.image || "/logo.png"}
                      alt={g.title}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium truncate text-foreground">
                    {g.title}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{g.genre}</div>
                </Link>
              ))}
            </div>
          </section>

          

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

          {/* More games - mobile bottom (different set) */}
          <section className="lg:hidden">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
              {t("moreGames")}
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
              {moreGamesBottom.map((g) => (
                <Link
                  key={g.slug}
                  href={`/${locale}/game/${g.slug}`}
                  className="shrink-0 snap-start w-40"
                >
                  <div className="relative w-40 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={g.image || "/logo.png"}
                      alt={g.title}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium truncate text-foreground">
                    {g.title}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{g.genre}</div>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <div className="my-2 border-t-4 border-border lg:hidden" />
          {/* Other games - mobile list (middle) */}
          <section className="lg:hidden">
            
            <div className="space-y-2">
              {moreGamesList.map((g) => (
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
          </section>
        
        {/* More games - desktop sidebar */}
        <aside className="hidden lg:sticky lg:top-20 lg:block h-max">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
            {t("moreGames")}
          </h3>
          <div className="space-y-2">
            {allOtherGames.slice(0, 8).map((g) => (
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

