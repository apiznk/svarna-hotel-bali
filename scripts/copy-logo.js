const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\izmy8\\.gemini\\antigravity-ide\\brain\\bb9419f9-8667-4b78-ab39-faf57252a0a5\\svarna_logo_1782593398852.png";
const dest = path.join(__dirname, '../public/images/logo_white.png');

try {
  fs.copyFileSync(src, dest);
  console.log("Logo copied successfully from " + src + " to " + dest);
} catch (err) {
  console.error("Error copying logo:", err.message);
}
