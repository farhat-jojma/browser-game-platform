"use client";

import { redirect } from "next/navigation";

export default async function RootPage() {
  // Redirect root path to default locale, e.g., /en
  redirect("/en");
}
