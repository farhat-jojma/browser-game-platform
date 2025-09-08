"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { badgeGradientFor, borderClassFor } from "./gameCardUtils";

export default function DesktopGameCard({ game }) {
  const t = useTranslations("genres");
  const locale = useLocale();

  const href = `/${locale}/game/${game.id || game.slug}`;
  const genre = game.badgeGenre ?? game.genre;

  let badgeText = game.badge;
  if (!badgeText && genre) {
    try {
      badgeText = t(genre.toLowerCase());
    } catch {
      badgeText = genre;
    }
  }

  const gradient = game.badgeColor || badgeGradientFor(genre);
  const borderClr = game.badgeBorder || borderClassFor(genre);

  const [imageError, setImageError] = useState(false);
  const hasImage = Boolean(game.image) && !imageError;

  return (
    <Link href={href} className="group block">
      <div className="relative rounded-xl ring-1 ring-white/10 transition-colors duration-300">
        <div className="relative overflow-hidden rounded-xl">
          <div className="relative aspect-[16/9] w-full">
            {hasImage ? (
              <>
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </>
            ) : (
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-b ${gradient}`}
              />
            )}
          </div>

          <div
            className={[
              "pointer-events-none absolute inset-0 rounded-xl",
              "border-2 opacity-0 transition-opacity duration-200",
              "group-hover:opacity-100",
              borderClr,
            ].join(" ")}
          />

          {badgeText && (
            <span
              className={`pointer-events-none absolute left-1 top-1 sm:left-1.5 sm:top-1.5
                          rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none
                          shadow-sm ring-1 ring-black/10 bg-gradient-to-b ${gradient}
                          transition-opacity duration-200 group-hover:opacity-0`}
            >
              {badgeText}
            </span>
          )}

          <div className="pointer-events-none absolute bottom-2 left-3">
            <span
              className="text-white font-semibold drop-shadow-md
                         opacity-0 translate-y-[2px]
                         transition duration-200
                         group-hover:opacity-100 group-hover:translate-y-0"
            >
              {game.title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
