"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function MobileHero() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 text-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/logo.png')] bg-cover"></div>

      <div className="relative px-4 py-8 md:px-10 md:py-12 max-w-6xl mx-auto">
        {/* Texte principal */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 drop-shadow-lg">
            {t("homepage.seoTitle")}
          </h1>
          <p className="text-sm md:text-lg mb-6 leading-relaxed opacity-90 max-w-2xl mx-auto lg:mx-0">
            {t("homepage.seoIntro")}
          </p>
        </div>

        {/* Avantages */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-6">
  {[
    { title: t("homepage.benefit1"), desc: t("homepage.benefit1Desc") },
    { title: t("homepage.benefit2"), desc: t("homepage.benefit2Desc") },
    { title: t("homepage.benefit3"), desc: t("homepage.benefit3Desc") },
    { title: t("homepage.benefit4"), desc: t("homepage.benefit4Desc") },
  ].map((b, i) => (
    <div
      key={i}
      className={`flex flex-col items-center text-center bg-gradient-to-br from-purple-700/40 to-purple-900/40 p-4 rounded-2xl shadow-md animate-float`}
      style={{ animationDelay: `${i * 0.3}s` }}
    >
      <h3 className="font-semibold text-xs sm:text-sm text-white mb-1">{b.title}</h3>
      <p className="text-[11px] sm:text-xs text-gray-200 opacity-80">{b.desc}</p>
    </div>
  ))}
</div>


        {/* Jeux */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-2">
          {[
            {
              slug: "retro-bowl",
              src: "https://farhat-jojma.github.io/my-assets-repo/retro-bowl.jpg",
              title: "Retro Bowl",
            },
            {
              slug: "neon-rider",
              src: "https://farhat-jojma.github.io/my-assets-repo/neon-rider.png",
              title: "Neon Rider",
            },
            {
              slug: "dungeon-quest",
              src: "https://farhat-jojma.github.io/my-assets-repo/dungeon-quest.png",
              title: "Dungeon Quest",
            },
            {
              slug: "neon-pong",
              src: "https://farhat-jojma.github.io/my-assets-repo/neon-pong.jpg",
              title: "Neon Pong",
            },
          ].map((game) => (
            <Link
              key={game.slug}
              href={`/${locale}/game/${game.slug}`}
              className="group relative block rounded-xl overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            >
              <img
                src={game.src}
                alt={`Play ${game.title}`}
                className="rounded-xl object-cover w-full h-28 sm:h-32 lg:h-36 transition-transform duration-300 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
              <div className="absolute bottom-2 left-2">
                <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-md opacity-0 translate-y-[2px] transition duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                  {game.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
