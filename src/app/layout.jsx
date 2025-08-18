import "./globals.css";
import AppShell from "./AppShell";

export const metadata = {
  title: "Browser Game Platform",
  description: "Play browser games online for free!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
