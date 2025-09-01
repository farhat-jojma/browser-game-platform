import "../globals.css";
import AppShell from "../AppShell";
import { ThemeProvider } from "./components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// ✅ Dynamic metadata based on locale
export async function generateMetadata({ params }) {
  const { locale } = await params;

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return {
      title: messages?.metadata?.title || "Browser Game Platform",
      description: messages?.metadata?.description || "Play browser games online for free!",
    };
  } catch (error) {
    return {
      title: "Browser Game Platform",
      description: "Play browser games online for free!",
    };
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  let messages;
  try {
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
