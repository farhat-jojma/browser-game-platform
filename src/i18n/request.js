import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // fallback si jamais locale est undefined
  const activeLocale = locale || "en";

  try {
    return {
      locale: activeLocale, // 👈 obligatoire
      messages: (await import(`../messages/${activeLocale}.json`)).default
    };
  } catch (error) {
    console.error(`❌ Missing messages for locale: ${activeLocale}`);
    return {
      locale: "en",
      messages: {}
    };
  }
});
