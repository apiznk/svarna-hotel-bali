import fs from 'fs';
import path from 'path';

const srcDir = process.cwd(); // webkopi/
const destDir = path.resolve(srcDir, '../tes2ss');

const excludeDirs = ['node_modules', '.git', '.next', 'dist', 'out'];
const excludeFiles = ['.env', '.env.local', 'package-lock.json'];

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    const baseName = path.basename(src);
    if (excludeDirs.includes(baseName)) {
      return;
    }
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    const baseName = path.basename(src);
    if (excludeFiles.includes(baseName)) {
      return;
    }
    fs.copyFileSync(src, dest);
  }
}

console.log(`Copying files from ${srcDir} to ${destDir}...`);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach((item) => {
  copyRecursive(path.join(srcDir, item), path.join(destDir, item));
});

console.log('Copy completed successfully!');
