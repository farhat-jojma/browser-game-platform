// src/app/api/desc/route.js
export const dynamic = "force-dynamic"; // Vercel/Cloudflare Workers l’acceptent

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response("Missing url parameter", { status: 400 });
  }

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return new Response("Failed to fetch description", { status: res.status });
    }

    const html = await res.text();

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8"
      }
    });
  } catch (err) {
    return new Response("Server error: " + err.message, { status: 500 });
  }
}
