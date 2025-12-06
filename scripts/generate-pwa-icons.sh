#!/bin/bash

# PWA Icon Generator Script
# This script generates all required PWA icons from a source image

echo "🎨 PWA Icon Generator for SchoolHub"
echo "===================================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is not installed. Installing..."
    echo "Run: sudo apt-get install imagemagick"
    exit 1
fi

# Source image (use your logo.png)
SOURCE="public/logo.png"

if [ ! -f "$SOURCE" ]; then
    echo "❌ Source image not found: $SOURCE"
    echo "Please ensure you have logo.png in the public folder"
    exit 1
fi

echo "✅ Found source image: $SOURCE"
echo ""
echo "Generating PWA icons..."

# Array of sizes
sizes=(72 96 128 144 152 192 384 512)

# Generate each size
for size in "${sizes[@]}"; do
    output="public/icon-${size}x${size}.png"
    convert "$SOURCE" -resize ${size}x${size} "$output"
    if [ -f "$output" ]; then
        echo "✅ Generated: $output"
    else
        echo "❌ Failed to generate: $output"
    fi
done

echo ""
echo "🎉 Done! All PWA icons generated successfully!"
echo ""
echo "Next steps:"
echo "1. Test your PWA by running: npm run build && npm start"
echo "2. Open Chrome DevTools > Application > Manifest"
echo "3. Check 'Service Workers' section"
echo "4. Click 'Install App' button in address bar"
