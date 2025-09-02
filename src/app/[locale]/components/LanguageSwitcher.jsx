"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "flag-icons/css/flag-icons.min.css"; // 👈 important pour activer les drapeaux

const LOCALES = [
  { code: "en", label: "English", flag: "gb" }, // 'gb' = Union Jack
  { code: "fr", label: "Français", flag: "fr" },
  { code: "es", label: "Español", flag: "es" },
  { code: "de", label: "Deutsch", flag: "de" },
  { code: "it", label: "Italiano", flag: "it" },
  { code: "pt", label: "Português", flag: "pt" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Remplace la locale dans l’URL
  function redirectPathname(locale) {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  // Locale active
  const activeLocale = pathname?.split("/")[1] || "en";
  const current = LOCALES.find((l) => l.code === activeLocale) || LOCALES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 rounded-md border bg-secondary hover:bg-secondary/80 text-sm">
        <span className={`fi fi-${current.flag}`} />
        <span className="hidden sm:inline">{current.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        {LOCALES.map((loc) => (
          <DropdownMenuItem key={loc.code} asChild>
            <Link
              href={redirectPathname(loc.code)}
              className="flex items-center gap-2"
            >
              <span className={`fi fi-${loc.flag}`} />
              <span>{loc.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
