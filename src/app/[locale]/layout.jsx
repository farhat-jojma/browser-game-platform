import "../globals.css";
import AppShell from "../AppShell";
import { ThemeProvider } from "./components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import BackToTopButton from "./components/BackToTopButton";
import Script from "next/script";

// ✅ Dynamic metadata based on locale
export async function generateMetadata({ params }) {
  const { locale } = params;

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return {
      title: messages?.metadata?.title || "Browser Game Platform",
      description:
        messages?.metadata?.description || "Play browser games online for free!",
    };
  } catch (error) {
    return {
      title: "Browser Game Platform",
      description: "Play browser games online for free!",
    };
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound(); // if locale does not exist
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AppShell>{children}</AppShell>
          </ThemeProvider>
        </NextIntlClientProvider>

        <BackToTopButton />

        {/* ✅ Correct way to add Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LVBE1ZKW1G"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LVBE1ZKW1G');
          `}
        </Script>
      </body>
    </html>
  );
}
