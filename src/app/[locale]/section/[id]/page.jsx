import SectionPageClient from "./SectionPageClient";
import Suggestions from "../../components/Suggestions";
import data from "../../../../data/games.json";

// Prebuild static paths for the section ids you have
export async function generateStaticParams() {
  const ids = Object.keys(data?.sections ?? { featured: [], new: [] });
  return ids.map((id) => ({ id }));
}

// Optional: better tab title
export async function generateMetadata({ params }) {
  const resolvedParams = await params; // ✅ ensure it's unwrapped
  const { id, locale } = resolvedParams;

  try {
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    const sectionTitle = messages?.section?.titles?.[id] || id;
    const baseTitle = messages?.metadata?.title || "Games";
    return { title: `${sectionTitle} - ${baseTitle}` };
  } catch (error) {
    return { title: `${id} - Games` };
  }
}


export default async function SectionPage({ params }) {
  const resolvedParams = await params; // ✅
  const { id, locale } = resolvedParams;

  const suggestions = [
    { label: "Play Retro Games", href: `/${locale}/section/retro` },
    { label: "Discover Racing", href: `/${locale}/section/racing` },
    { label: "Puzzle Games", href: `/${locale}/section/puzzle` },
  ];

  return (
    <>
      <SectionPageClient id={id} />
      {/* 
      <div className="p-6">
        <Suggestions items={suggestions} />
      </div>
      */}
    </>
  );
}
