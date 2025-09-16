import "../globals.css";
import AppShell from "../AppShell";
import { ThemeProvider } from "./components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import BackToTopButton from "./components/BackToTopButton";
import Script from "next/script";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ✅ Use next/font for Inter
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // avoids FOIT
});

// ✅ Pre-import messages
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import es from "../../messages/es.json";
import de from "../../messages/de.json";
import it from "../../messages/it.json";
import pt from "../../messages/pt.json";
import hi from "../../messages/hi.json";
import th from "../../messages/th.json";
import bg from "../../messages/bg.json";

const messagesMap = { en, fr, es, de, it, pt, hi, th, bg };

// ✅ Metadata per locale
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = messagesMap[locale] || messagesMap["en"];

  return {
    title: messages?.metadata?.title || "Games Online Gratis",
    description:
      messages?.metadata?.description || "Play browser games online for free!",
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = messagesMap[locale] || messagesMap["en"];

  if (!messages) notFound();

  console.log(
    "Loaded locale:",
    locale,
    "messages keys:",
    Object.keys(messages)
  );

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RB3Q1DXSDP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RB3Q1DXSDP', { send_page_view: false });
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AppShell>{children}</AppShell>
          </ThemeProvider>
        </NextIntlClientProvider>

        <BackToTopButton />
        <AnalyticsTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
