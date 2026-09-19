#!/usr/bin/env node
/**
 * Static GitHub Pages export.
 * Skips Nitro (Vercel) and prerenders a client SPA into dist/client.
 */
import { spawnSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL(".", import.meta.url)));
const env = { ...process.env, GITHUB_PAGES: "1" };

const result = spawnSync(
  process.execPath,
  ["scripts/with-app-env.mjs", "vite", "build"],
  { cwd: root, env, stdio: "inherit" },
);

const outDirs = [
  join(root, "dist", "client"),
  join(root, ".output", "public"),
  join(root, "dist"),
];

function findHtml(dir) {
  if (!existsSync(dir)) return [];
  const hits = [];
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (name.isFile() && name.name.endsWith(".html")) {
      hits.push(join(dir, name.name));
    }
  }
  return hits;
}

let outDir = outDirs.find((dir) => findHtml(dir).length > 0);
if (!outDir) {
  outDir = outDirs.find((dir) => existsSync(join(dir, "assets")));
}

if (!outDir) {
  console.error("Pages build produced no client output directory.");
  process.exit(result.status === 0 ? 1 : result.status || 1);
}

const indexPath = join(outDir, "index.html");
const shellPath = join(outDir, "_shell.html");
const bareIndex = join(outDir, "index");

if (!existsSync(indexPath)) {
  if (existsSync(shellPath)) {
    copyFileSync(shellPath, indexPath);
  } else if (existsSync(bareIndex) && readFileSync(bareIndex).byteLength > 0) {
    copyFileSync(bareIndex, indexPath);
  }
}

if (!existsSync(indexPath) || readFileSync(indexPath).byteLength === 0) {
  const assetsDir = join(outDir, "assets");
  if (!existsSync(assetsDir)) {
    console.error("Pages build did not emit index.html.");
    process.exit(1);
  }
  const assets = readdirSync(assetsDir);
  const js = assets.find((name) => name.startsWith("index-") && name.endsWith(".js"));
  const css = assets.find((name) => name.endsWith(".css"));
  if (!js) {
    console.error("Pages build did not emit a client bundle.");
    process.exit(1);
  }
  const base = "/sharp-studios-website/";
  writeFileSync(
    indexPath,
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sharp Studios LLC | Barbershop in Reading, PA</title>
    <meta name="description" content="Sharp Studios LLC — fades, haircuts, kids’ cuts, and beards at 157 N 5th St, Reading, PA. Book on Booksy." />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="https://sysopx786.github.io/sharp-studios-website/" />
    <meta property="og:title" content="Sharp Studios LLC | Barbershop in Reading, PA" />
    <meta property="og:image" content="https://sysopx786.github.io/sharp-studios-website/og.jpg" />
    <link rel="icon" type="image/svg+xml" href="${base}favicon.svg" />
    ${css ? `<link rel="stylesheet" href="${base}assets/${css}" />` : ""}
  </head>
  <body>
    <script type="module" src="${base}assets/${js}"></script>
  </body>
</html>
`,
  );
  console.warn("Wrote a fallback index.html (prerender did not emit HTML).");
}

copyFileSync(indexPath, join(outDir, "404.html"));
writeFileSync(join(outDir, ".nojekyll"), "");

const marker = join(root, ".pages-output");
writeFileSync(marker, outDir);

console.log(`GitHub Pages output: ${outDir}`);
process.exit(0);
