export const runtime = 'edge';
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GamePlayer from "../../components/gameplayer/GamePlayer";
import data from "../../../../data/games.json";

import path from "node:path";
import { promises as fs } from "node:fs";
import { getTranslations } from "next-intl/server";

// Lire fichier description HTML
async function loadDescriptionHTML(descField) {
  if (!descField) return null;
  const trimmed = String(descField).trim();

  if (trimmed.startsWith("<")) return trimmed;

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("/api/")
  ) {
    try {
      const res = await fetch(trimmed, { cache: "no-store" });
      if (!res.ok) return null;
      return await res.text();
    } catch {
      return null;
    }
  }

  const rel = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;
  const full = path.join(process.cwd(), "public", rel);
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

  const descHTML = await loadDescriptionHTML(game.description);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">{game.title}</h1>
        <span className="text-sm text-white/60">{game.genre}</span>
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
                className="leading-relaxed text-white/80 space-y-3
                  [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold
                  [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold
                  [&_a]:text-violet-400 hover:[&_a]:underline
                  [&_img]:rounded-xl [&_img]:my-3"
              >
                <div dangerouslySetInnerHTML={{ __html: descHTML }} />
              </article>
            ) : (
              <p className="text-white/75">{t("noDescription")}</p>
            )}
          </section>
        </div>

        {/* More games */}
        <aside className="lg:sticky lg:top-20 h-max">
          <h3 className="text-sm font-semibold text-white/70 uppercase mb-3">
            {t("moreGames")}
          </h3>
          <div className="space-y-2">
            {moreGames.map((g) => (
              <Link
                key={g.slug}
                href={`/${locale}/game/${g.slug}`}
                className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/5 transition"
              >
                <div className="relative w-24 min-w-24 aspect-video rounded-md overflow-hidden bg-white/5">
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-medium leading-tight truncate">
                    {g.title}
                  </div>
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
