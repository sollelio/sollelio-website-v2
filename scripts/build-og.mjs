// Generates the social-sharing images (1200×630) from the approved outlined
// lockups, which carry their typography as paths, so no font is needed at
// render time. Run `npm run build:og` after a brand asset changes; the PNGs
// are committed under public/og/.
import sharp from 'sharp';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = `${root}public/og/`;
mkdirSync(out, { recursive: true });

const images = [
  { name: 'sollelio', lockup: 'public/brand/sollelio-logo.svg', width: 560 },
  { name: 'events', lockup: 'public/brand/sollelio-events-logo.svg', width: 600 },
  { name: 'beauty-os', lockup: 'public/brand/sollelio-beauty-os-logo.svg', width: 640 },
];

for (const image of images) {
  const lockup = await sharp(readFileSync(`${root}${image.lockup}`))
    .resize({ width: image.width })
    .png()
    .toBuffer();
  const { width, height } = await sharp(lockup).metadata();
  const png = await sharp({
    create: { width: 1200, height: 630, channels: 4, background: '#F7F4EE' },
  })
    .composite([
      {
        input: lockup,
        left: Math.round((1200 - (width ?? 0)) / 2),
        top: Math.round((630 - (height ?? 0)) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(`${out}${image.name}.png`, png);
  console.log(`✓ public/og/${image.name}.png (${(png.length / 1024).toFixed(1)} KB)`);
}
