import "./globals.css";
import AppShell from "./AppShell";
import { ThemeProvider } from "./components/theme-provider";

export const metadata = {
  title: "Browser Game Platform",
  description: "Play browser games online for free!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppShell>{children}</AppShell>
    </ThemeProvider>
  </body>
</html>

  );
}
