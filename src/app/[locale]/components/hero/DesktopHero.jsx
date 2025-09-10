"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function DesktopHero() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative h-[450px] bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 text-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/logo.png')] bg-cover"></div>

        <div className="relative h-full px-6 py-8 md:px-10 md:py-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Texte */}
            <div className="overflow-hidden">
            <h1 className="text-[clamp(1.3rem,3.5vw,2.2rem)] font-extrabold mb-4 drop-shadow-lg line-clamp-2">
                {t("homepage.seoTitle")}
            </h1>
            <p className="text-[clamp(0.9rem,1.5vw,1.1rem)] mb-6 leading-relaxed opacity-95 line-clamp-3">
                {t("homepage.seoIntro")}
            </p>



          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md hover:bg-white/20 transition animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <h3 className="font-semibold mb-1 text-sm">
                  {t(`homepage.benefit${i}`)}
                </h3>
                <p className="text-xs opacity-80">
                  {t(`homepage.benefit${i}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
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
              slug: "neon-pong",
              src: "https://farhat-jojma.github.io/my-assets-repo/neon-pong.jpg",
              title: "Neon Pong",
              span: "col-span-2",
            },
          ].map((game) => (
            <Link
              key={game.slug}
              href={`/${locale}/game/${game.slug}`}
              className={`group relative block ${game.span || ""} rounded-xl overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.6)]`}
            >
              <img
                src={game.src}
                alt={`Play ${game.title}`}
                className="rounded-xl object-cover w-full h-36 sm:h-32 transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
              <div className="absolute bottom-2 left-3">
                <span className="text-white font-semibold drop-shadow-md opacity-0 translate-y-[2px] transition duration-200 group-hover:opacity-100 group-hover:translate-y-0">
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
