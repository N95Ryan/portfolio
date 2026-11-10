import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const icoPath = join(root, "public/favicon2.ico");
const ico = readFileSync(icoPath);
const count = ico.readUInt16LE(4);

function extractLayer(w, h) {
  let pos = 6;
  for (let i = 0; i < count; i++) {
    const lw = ico.readUInt8(pos) || 256;
    const lh = ico.readUInt8(pos + 1) || 256;
    const size = ico.readUInt32LE(pos + 8);
    const off = ico.readUInt32LE(pos + 12);
    if (lw === w && lh === h) return ico.subarray(off, off + size);
    pos += 16;
  }
  throw new Error(`Calque ${w}x${h} introuvable dans favicon2.ico`);
}

writeFileSync(join(root, "public/favicon-32x32.png"), extractLayer(32, 32));

const layer48 = extractLayer(48, 48);
const head = await sharp(layer48)
  .resize(148, 148, {
    kernel: sharp.kernel.nearest,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 180,
    height: 180,
    channels: 4,
    background: { r: 18, g: 18, b: 18, alpha: 1 },
  },
})
  .composite([{ input: head, gravity: "center" }])
  .png()
  .toFile(join(root, "public/apple-touch-icon.png"));

console.log("OK: favicon-32x32.png et apple-touch-icon.png régénérés depuis public/favicon2.ico");
