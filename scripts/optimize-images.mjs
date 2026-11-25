#!/usr/bin/env node
/*
 * optimize-images.mjs - resize and re-encode the raster images in ./public.
 *
 * Requires sharp. Either add it as a devDependency:
 *     npm i -D sharp
 * or run it against a sharp installed elsewhere:
 *     npm i --prefix /tmp/sharp-tool sharp
 *     NODE_PATH=/tmp/sharp-tool/node_modules node scripts/optimize-images.mjs --dry-run
 *
 * Usage:
 *     node scripts/optimize-images.mjs [options]
 *
 *   --in <dir>        source directory (default: public)
 *   --out <dir>       destination directory (default: public-optimized)
 *   --max-width <px>  max width, images are never upscaled (default: 1600)
 *   --quality <1-100> JPEG quality (default: 80)
 *   --in-place        overwrite the source files instead of writing to --out
 *   --dry-run         report sizes only, write nothing
 *
 * Non-image files are copied to --out so the result is a drop-in replacement.
 */
import { readdir, stat, mkdir, copyFile, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const EXT = new Set([".jpg", ".jpeg", ".png"]);

function parseArgs(argv) {
  const opts = { in: "public", out: "public-optimized", maxWidth: 1600, quality: 80, inPlace: false, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const value = () => {
      const v = argv[++i];
      if (v === undefined || v.startsWith("--")) throw new Error(`missing value for ${a}`);
      return v;
    };
    if (a === "--in") opts.in = value();
    else if (a === "--out") opts.out = value();
    else if (a === "--max-width") opts.maxWidth = Number(value());
    else if (a === "--quality") opts.quality = Number(value());
    else if (a === "--in-place") opts.inPlace = true;
    else if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--help" || a === "-h") opts.help = true;
    else throw new Error(`unknown argument: ${a}`);
  }
  if (!Number.isInteger(opts.maxWidth) || opts.maxWidth < 16 || opts.maxWidth > 10000)
    throw new Error("--max-width must be an integer between 16 and 10000");
  if (!Number.isInteger(opts.quality) || opts.quality < 1 || opts.quality > 100)
    throw new Error("--quality must be an integer between 1 and 100");
  if (opts.inPlace && opts.dryRun) throw new Error("--in-place and --dry-run are mutually exclusive");
  return opts;
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

async function encode(sharp, file, opts) {
  const image = sharp(file, { failOn: "none" });
  const meta = await image.metadata();
  const pipeline = meta.width > opts.maxWidth ? image.resize({ width: opts.maxWidth, withoutEnlargement: true }) : image;
  return path.extname(file).toLowerCase() === ".png"
    ? pipeline.png({ compressionLevel: 9, palette: true, effort: 8 }).toBuffer()
    : pipeline.jpeg({ quality: opts.quality, mozjpeg: true }).toBuffer();
}

const mb = (n) => (n / 1024 / 1024).toFixed(2) + " MB";

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    console.log(await readFile(new URL(import.meta.url)).then((b) => b.toString().split("*/")[0]));
    return;
  }
  const srcRoot = path.resolve(opts.in);
  if (!(await stat(srcRoot).catch(() => null))?.isDirectory()) throw new Error(`--in is not a directory: ${srcRoot}`);
  const outRoot = opts.inPlace ? srcRoot : path.resolve(opts.out);
  if (!opts.inPlace && (outRoot === srcRoot || outRoot.startsWith(srcRoot + path.sep)))
    throw new Error("--out must be outside --in (or use --in-place)");

  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    throw new Error("sharp is not installed - see the usage header at the top of this file");
  }

  const files = await walk(srcRoot);
  let before = 0;
  let after = 0;
  for (const file of files) {
    const rel = path.relative(srcRoot, file);
    const size = (await stat(file)).size;
    if (!EXT.has(path.extname(file).toLowerCase())) {
      before += size;
      after += size;
      if (!opts.inPlace && !opts.dryRun) {
        await mkdir(path.join(outRoot, path.dirname(rel)), { recursive: true });
        await copyFile(file, path.join(outRoot, rel));
      }
      continue;
    }
    let buffer;
    try {
      buffer = await encode(sharp, file, opts);
    } catch (err) {
      console.warn(`SKIP  ${rel}: ${err.message}`);
      before += size;
      after += size;
      continue;
    }
    // Keep the original when re-encoding made the file bigger.
    const keepOriginal = buffer.length >= size;
    const finalSize = keepOriginal ? size : buffer.length;
    before += size;
    after += finalSize;
    const pct = size ? (((size - finalSize) / size) * 100).toFixed(1) : "0.0";
    console.log(`${mb(size).padStart(9)} -> ${mb(finalSize).padStart(9)}  ${pct.padStart(5)}%  ${rel}${keepOriginal ? " (kept original)" : ""}`);
    if (opts.dryRun) continue;
    const dest = path.join(outRoot, rel);
    await mkdir(path.dirname(dest), { recursive: true });
    if (keepOriginal) {
      if (!opts.inPlace) await copyFile(file, dest);
    } else await writeFile(dest, buffer);
  }
  console.log(`\nTOTAL ${mb(before)} -> ${mb(after)}  (${(((before - after) / before) * 100).toFixed(1)}% smaller, ${files.length} files)`);
  if (opts.dryRun) console.log("dry run: nothing was written");
  else console.log(`written to ${outRoot}`);
}

main().catch((err) => {
  console.error(`error: ${err.message}`);
  process.exit(1);
});
