// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Browser Game Platform",
  description: "Play browser games online for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
