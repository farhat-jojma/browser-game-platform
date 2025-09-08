"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "../../lib/gtag";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}
