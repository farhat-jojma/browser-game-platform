"use client";

export const runtime = "edge";

import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";

function SearchLoading() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 bg-white/10 rounded animate-pulse"></div>
      <div className="h-4 w-64 bg-white/5 rounded animate-pulse"></div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchPageClient />
    </Suspense>
  );
}
