import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  { url: 'https://www.ayana.com/img/bali/_r/logo_white_x2_00091@2x.webp', dest: 'public/images/logo_white.webp' },
  { url: 'https://files-r2.ayana.com/u/prod/mov/pc/main-bg@av1.mp4', dest: 'public/images/main-bg.mp4' },
  { url: 'https://files-r2.ayana.com/u/prod/mov/pc/bali-aerial@av1.mp4', dest: 'public/images/bali-aerial.mp4' },
  { url: 'https://files-r2.ayana.com/u/prod/mov/pc/bali-aerial@webp.webp', dest: 'public/images/bali-aerial-poster.webp' },
  { url: 'https://www.ayana.com/img/bali/_r/aerial-start@2x.webp', dest: 'public/images/aerial-start.webp' },
  { url: 'https://www.ayana.com/img/bali/_r/aerial-start-gradation@2x.webp', dest: 'public/images/aerial-start-gradation.webp' },
  { url: 'https://www.ayana.com/img/bali/_r/aerial-end-gradation@2x.webp', dest: 'public/images/aerial-end-gradation.webp' }
];

function download(url, dest) {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      download(response.headers.location, dest);
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${url} -> ${dest}`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${url}: ${err.message}`);
  });
}

// Ensure directory exists
const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

assets.forEach(asset => {
  const destPath = path.join(process.cwd(), asset.dest);
  download(asset.url, destPath);
});
