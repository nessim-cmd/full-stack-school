// scripts/generate-pwa-icons.js - Generate PWA icons from logo
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourcePath = path.join(__dirname, '../public/logo.png');
const outputDir = path.join(__dirname, '../public');

console.log('🎨 PWA Icon Generator for SchoolHub');
console.log('====================================\n');

// Check if source exists
if (!fs.existsSync(sourcePath)) {
  console.error('❌ Source image not found:', sourcePath);
  console.log('Please ensure you have logo.png in the public folder');
  process.exit(1);
}

console.log('✅ Found source image:', sourcePath);
console.log('\nGenerating PWA icons...\n');

// Generate icons
Promise.all(
  sizes.map(async (size) => {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
    
    try {
      await sharp(sourcePath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated: icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`❌ Failed to generate icon-${size}x${size}.png:`, error.message);
    }
  })
).then(() => {
  console.log('\n🎉 Done! All PWA icons generated successfully!\n');
  console.log('Next steps:');
  console.log('1. Build your app: npm run build');
  console.log('2. Start production server: npm start');
  console.log('3. Open in Chrome and check Application > Manifest');
  console.log('4. Click "Install App" button in address bar\n');
}).catch(error => {
  console.error('❌ Error generating icons:', error);
  process.exit(1);
});
