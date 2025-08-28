import "../globals.css";
import AppShell from "../AppShell";
import { ThemeProvider } from "./components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// Metadata (optionnellement traduisible)
export const metadata = {
  title: "Browser Game Platform",
  description: "Play browser games online for free!",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params; // ✅ attendre params

  let messages;
  try {
    // Charger le fichier JSON de la locale
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound(); // si la locale n'existe pas
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AppShell>{children}</AppShell>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
