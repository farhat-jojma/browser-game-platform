"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SimpleGameCard from "../components/gamecard/SimpleGameCard";
import data from "../../../data/games.json";
import { useTranslations, useLocale } from "next-intl";

const norm = (s = "") =>
  s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

const SECTION_ALIASES = {
  featured: [
    "featured", "à la une", "a la une", "destacado", "ausgewählt", "in primo piano",
    "em destaque", "精选", "विशेष", "แนะนำ"
  ],
  new: [
    "new", "nouveau", "nouveaux", "nuevo", "neu", "nuovo", "novo", "ново", "नया", "ใหม่"
  ],
  trending: [
    "trending", "tendance", "tendances", "tendencia", "tendencias", "im trend",
    "di tendenza", "tendência", "тренд", "ट्रेंडिंग", "กำลังมาแรง"
  ],
  updated: [
    "updated", "mise à jour", "maj", "actualizado", "aktualisiert", "aggiornato",
    "atualizado", "актуализирано", "अपडेट", "อัปเดต"
  ],
  originals: [
    "originals", "originaux", "originales", "originales", "originale", "originali",
    "originais", "оригинали", "मूल", "ต้นฉบับ"
  ],
  multiplayer: [
    "multiplayer", "multijoueur", "multijoueurs", "2 player", "dos jugadores",
    "mehrspieler", "multigiocatore", "multijogador", "мултиплейър", "मल्टीप्लेयर", "ผู้เล่นหลายคน"
  ],
  action: [
    "action", "action", "acción", "azione", "ação", "акция", "कार्य", "แอ็กชัน"
  ],
  adventure: [
    "adventure", "aventure", "aventura", "abenteuer", "avventura",
    "aventura", "приключение", "साहसिक", "ผจญภัย"
  ],
  sports: [
    "sports", "sport", "deportes", "sportarten", "sport", "esportes",
    "спорт", "खेल", "กีฬา"
  ],
  driving: [
    "driving", "conduite", "conducción", "fahren", "guida",
    "condução", "шофиране", "ड्राइविंग", "การขับรถ"
  ],
  racing: [
    "racing", "course", "carrera", "rennen", "corsa", "corrida",
    "надбягване", "रेसिंग", "แข่งรถ"
  ],
  arcade: [
    "arcade", "arcade", "arcada", "spielhalle", "sala giochi", "arcada",
    "аркада", "आर्केड", "อาร์เคด"
  ],
  puzzle: [
    "puzzle", "casse-tête", "casse tete", "rompecabezas", "rätsel", "puzzle",
    "quebra-cabeça", "пъзел", "पहेली", "ปริศนา"
  ],
  shooter: [
    "shooter", "tireur", "tirador", "schütze", "sparatutto",
    "atirador", "стрелец", "शूटर", "เกมยิง"
  ],
  brain: [
    "brain", "cerveau", "mente", "kopf", "cervello", "cérebro",
    "мозък", "दिमाग", "สมอง"
  ],
  merge: [
    "merge", "fusion", "combinar", "zusammenführen", "unire", "fundir",
    "сливане", "मर्ज", "ผสาน"
  ],
  stack: [
    "stack", "pile", "apilar", "stapel", "impilare", "pilha",
    "купчина", "स्टैक", "กอง"
  ],
  platformer: [
    "platformer", "plateforme", "plataformas", "plattformspiel",
    "platform", "plataforma", "платформер", "प्लेटफार्मर", "แพลตฟอร์ม"
  ],
  strategy: [
    "strategy", "stratégie", "estrategia", "strategie", "strategia",
    "estratégia", "стратегия", "रणनीति", "กลยุทธ์"
  ],
  rpg: [
    "rpg", "jeu de rôle", "rol", "rollenspiel", "gioco di ruolo",
    "jogo de interpretação", "ролева игра", "आरपीजी", "เกมสวมบทบาท"
  ],
  physics: [
    "physics", "physique", "física", "physik", "fisica",
    "física", "физика", "भौतिकी", "ฟิสิกส์"
  ],
  retro: [
    "retro", "rétro", "retro", "retro", "retrò", "retrô",
    "ретро", "रेट्रो", "เรโทร"
  ],
  kids: [
    "kids", "enfants", "niños", "kinder", "bambini", "crianças",
    "деца", "बच्चे", "เด็ก"
  ],
  card: [
    "card", "carte", "carta", "karte", "carta", "carta",
    "карта", "कार्ड", "ไพ่"
  ],
  bike: [
    "bike", "vélo", "bicicleta", "fahrrad", "bicicletta",
    "bicicleta", "колело", "साइकिल", "จักรยาน"
  ],
  drawing: [
    "drawing", "dessin", "dibujo", "zeichnen", "disegno",
    "desenho", "рисуване", "ड्राइंग", "การวาดภาพ"
  ]
};


function resolveSectionId(query) {
  const q = norm(query);
  for (const [id, aliases] of Object.entries(SECTION_ALIASES)) {
    if (aliases.some((a) => q.includes(norm(a)))) return id;
  }
  return null;
}

export default function SearchPageClient() {
  const t = useTranslations("search");
  const locale = useLocale(); // ✅ hook dans le composant
  const params = useSearchParams();
  const q = (params.get("q") ?? "").trim();

  const gamesMap = data?.games ?? {};
  const sections = data?.sections ?? {};
  const all = Object.entries(gamesMap).map(([slug, g]) => ({
    id: slug,
    url: `/${locale}/game/${slug}`, // ✅ locale incluse
    title: g.title,
    image: g.image,
    genre: g.genre,
    tags: g.tags || [],
  }));

  if (!q) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-extrabold">{t("title")}</h1>
        <p className="text-white/70">{t("placeholder")}</p>
      </div>
    );
  }

  const nq = norm(q);
  const matchedSectionId = resolveSectionId(q);
  const sectionSet = matchedSectionId ? new Set(sections[matchedSectionId] || []) : new Set();

  const genreCandidates = new Set(all.map((g) => norm(String(g.genre || ""))).filter(Boolean));
  const inferredGenres = Array.from(genreCandidates).filter(
    (g) => g && (nq === g || nq.includes(g))
  );

  const scoreOf = (g) => {
    const t = norm(g.title);
    const s = norm(g.id);
    const gg = norm(String(g.genre || ""));
    const tags = (g.tags || []).map(norm);

    let score = 0;
    if (t.startsWith(nq)) score += 6;
    if (t.includes(nq)) score += 4;
    if (s.includes(nq)) score += 3;
    if (gg.includes(nq)) score += 3;
    if (inferredGenres.some((ig) => gg === ig)) score += 4;
    if (tags.some((tag) => tag.includes(nq))) score += 2;
    if (sectionSet.has(g.id)) score += 5;

    return score;
  };

  const results = all
    .map((g) => ({ ...g, _score: scoreOf(g) }))
    .filter((g) => g._score > 0)
    .sort((a, b) => b._score - a._score || a.title.localeCompare(b.title));

  const total = results.length;

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-extrabold">
            {t("resultsFor", { query: q })}
          </h1>
          <p className="text-white/60 text-sm">
            {matchedSectionId && (
              <>
                {t("includesSection", { section: matchedSectionId })}
                {inferredGenres.length ? " • " : ""}
              </>
            )}
            {inferredGenres.length > 0 && (
              <>
                {t("genreMatch", { genre: inferredGenres[0] })}
              </>
            )}
          </p>
        </div>
        <div className="text-white/60 text-sm">
          {t("resultsCount", {
            count: total,
            plural: total === 1 ? "" : "s"
          })}
        </div>
      </header>

      {total > 0 ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {results.map(({ _score, ...g }) => (
            <SimpleGameCard key={g.id} game={g} />
          ))}
        </div>
      ) : (
        <div className="min-h-[calc(100vh-56px)]">
          <NoResultsFull query={q} />
        </div>
      )}
    </div>
  );
}

/* ───────────── Empty state ───────────── */
function NoResultsFull({ query }) {
  const t = useTranslations("search");
  const locale = useLocale(); // ✅ hook déplacé ici aussi

  const suggestions = [
    { key: "featured", href: `/${locale}/section/featured` },
    { key: "new", href: `/${locale}/section/new` },
    { key: "trending", href: `/${locale}/section/trending` },
    { key: "arcade", href: `/${locale}/section/arcade` },
    { key: "multiplayer", href: `/${locale}/section/multiplayer` },
    { key: "puzzle", href: `/${locale}/section/puzzle` },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* ... reste inchangé */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {suggestions.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 hover:text-white transition"
          >
            {t(`suggestions.${s.key}`)}
          </a>
        ))}
      </div>
    </div>
  );
}
