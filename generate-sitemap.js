const fs = require("fs");
const path = require("path");

// Liste des jeux (slug en lowercase pour URL)
const games = [
  "archery","bomberman","box-match","brain-game","braindom","braindom-2",
  "brainrot-jet-ski","brawl-viking","brick-breaker","bubble-stars","builditekt",
  "car-race","card-attack","card-legends","city-blocks","color-water-sort",
  "cups-tower-builder","diino-defense","drag-slam","dungeon-quest","dunk-drawing",
  "find-the-differences","fire-truck-driving","food-match-game","foot-pong",
  "fruit-bucket","fruit-ninja","fruit-party","galaga","granny-hero","gun-merge",
  "hat-hands","hero-blaster","hungry-snake-feed","inside-light","invace-spaders",
  "kindergarten-teacher","liquid-sort","mad-boy-adventures","math-pop","math-tiles",
  "mathup","mega-man-1930","memory-chess","neon-pong","neon-rider","pac-chef",
  "pac-rat","pet-party-columns","philosophers-merge","pink-and-blue","plug-heads",
  "pool-puzzle","random-basketball","retro-bowl","robo-tracker",
  "robotic-snake-attack","rotated-cups","shadow-boy-adventures","snake-game",
  "space-invace","spider-solitaire","sticky","street-skater","subway-runner",
  "super-agent","super-kid-adventure","super-pix","sushi-chef","sweety-cooking",
  "tanks-of-the-galaxy","three-cups","throw-daggers","traffic-command",
  "treasure-hunters","twist-tactics","uno","uno-monument-edition",
  "what-is-the-password","wrench-puzzle","zombie-attack"
];

// Locales
const locales = ["en", "fr", "ar", "es", "de", "it", "pt", "hi", "th", "bg"];

// Pages statiques
const staticPages = [
  "",                // home
  "about",
  "contact",
  "privacy-policy",
  "terms-of-service",
  "search"
];

const baseUrl = "https://www.gamesonlinegratis.com";

function generateAlternateLinks(path) {
  return locales
    .map(
      (lng) =>
        `<xhtml:link rel="alternate" hreflang="${lng}" href="${baseUrl}/${lng}${path}"/>`
    )
    .join("");
}

function today() {
  return new Date().toISOString().split("T")[0];
}

// Génération XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

// Pages statiques
staticPages.forEach((page) => {
  locales.forEach((lng) => {
    const pagePath = page ? `/${page}/` : "/"; // home = /
    xml += `
  <url>
    <loc>${baseUrl}/${lng}${pagePath}</loc>
    <lastmod>${today()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === "" ? "1.0" : "0.7"}</priority>
    ${generateAlternateLinks(pagePath)}
  </url>`;
  });
});

// Jeux
games.forEach((slug) => {
  locales.forEach((lng) => {
    xml += `
  <url>
    <loc>${baseUrl}/${lng}/game/${slug}</loc>
    <lastmod>${today()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    ${generateAlternateLinks(`/game/${slug}`)}
  </url>`;
  });
});

xml += "\n</urlset>";

// Sauvegarde du fichier
const outputPath = path.join(__dirname, "public", "sitemap-0.xml");
fs.writeFileSync(outputPath, xml, "utf8");

console.log("✅ sitemap-0.xml généré avec succès:", outputPath);
