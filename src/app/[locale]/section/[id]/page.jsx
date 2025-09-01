
import SectionPageClient from "./SectionPageClient";
import data from "../../../../data/games.json";

// Prebuild static paths for the section ids you have
export async function generateStaticParams() {
  const ids = Object.keys(data?.sections ?? { featured: [], new: [] });
  return ids.map((id) => ({ id }));
}

// Optional: better tab title
export async function generateMetadata({ params }) {
  const { id, locale } = await params;   // ✅ on attend params

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
  const { id } = await params;   // ✅ on attend params
  return <SectionPageClient id={id} />;
}
