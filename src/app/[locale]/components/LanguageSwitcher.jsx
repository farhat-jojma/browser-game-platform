"use client";

import { usePathname, useRouter } from "next/navigation";
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
  { code: "hi", label: "हिन्दी", flag: "in" } // 'in' = India
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

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

  // Handle locale change with client-side navigation to avoid full reload
  function handleLocaleChange(locale) {
    const newPath = redirectPathname(locale);
    router.replace(newPath, { scroll: false }); // 👈 important
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 rounded-md border bg-secondary hover:bg-secondary/80 text-sm">
        <span className={`fi fi-${current.flag}`} />
        <span className="hidden sm:inline">{current.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        {LOCALES.map((loc) => (
          <DropdownMenuItem
            key={loc.code}
            onClick={(e) => {
              e.preventDefault();
              handleLocaleChange(loc.code);
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className={`fi fi-${loc.flag}`} />
            <span>{loc.label}</span>
          </DropdownMenuItem>

        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
