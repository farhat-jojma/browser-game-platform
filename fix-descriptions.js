const fs = require("fs");

const filePath = "./src/data/games.json"; // adjust path if needed
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

Object.keys(data.games).forEach((slug) => {
  const game = data.games[slug];
  if (game.description) {
    // normalize to lowercase
    game.description = game.description.toLowerCase();
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

console.log("✅ games.json updated: all description paths set to lowercase");
