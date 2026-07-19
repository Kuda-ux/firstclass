import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "./public/images";
const files = fs.readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));
const images = [];
for (const file of files) {
  const meta = await sharp(path.join(dir, file)).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  images.push({ src: `/images/${file}`, width: w, height: h, orientation: w > h ? "landscape" : w < h ? "portrait" : "square" });
}
images.sort((a, b) => b.width * b.height - a.width * a.height);

const all = images.map((i) => i.src);
const landscapes = images.filter((i) => i.orientation === "landscape").map((i) => i.src);
const portraits = images.filter((i) => i.orientation === "portrait").map((i) => i.src);
const heroCandidates = landscapes.slice(0, 10);

const out = `// Auto-generated from public/images. Do not edit manually.
export const ALL_IMAGES = ${JSON.stringify(all, null, 2)};

export const LANDSCAPE_IMAGES = ${JSON.stringify(landscapes, null, 2)};

export const PORTRAIT_IMAGES = ${JSON.stringify(portraits, null, 2)};

export const HERO_CANDIDATES = ${JSON.stringify(heroCandidates, null, 2)};

export const IMAGES = ${JSON.stringify(images, null, 2)};
`;

fs.writeFileSync("./lib/image-manifest.ts", out);
console.log(`Generated manifest with ${all.length} images.`);
