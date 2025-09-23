import { getTranslations } from "next-intl/server";
import data from "../../../data/games.json";
import SimpleGameCard from "../components/gamecard/SimpleGameCard";

export const metadata = {
  title: "All Games - Play Free Online",
  description: "Browse and play all our free online games across all genres.",
};

export default async function GamesPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });

  // Convert object into array
  const allGames = Object.entries(data.games).map(([slug, game]) => ({
    slug,
    ...game,
  }));
  console.log("Tottal Games", allGames.length)

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-foreground">
          {t("allGames") || "All Games"}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t("browseAll") || "Browse and play all our free online games."}
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {allGames.map((game) => (
          <SimpleGameCard key={game.slug} game={game} />
        ))}
      </div>

    </div>
  );
}
