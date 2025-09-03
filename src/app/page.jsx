"use server";

import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect root path to default locale, e.g., /en
  redirect("/en");
}
