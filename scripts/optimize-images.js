import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const optimizeImage = async (inputPath, outputPath, quality = 80) => {
  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    console.log(`✅ Optimized: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error);
  }
};

const optimizePNG = async (inputPath, outputPath, quality = 80) => {
  try {
    await sharp(inputPath)
      .png({ quality })
      .toFile(outputPath);
    console.log(`✅ Optimized PNG: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error optimizing PNG ${inputPath}:`, error);
  }
};

// Large images to optimize
const imagesToOptimize = [
  { name: 'tripguide.png', quality: 70 },
  { name: 'carrent.png', quality: 75 },
  { name: 'jobit.png', quality: 75 },
  { name: 'herobg.png', quality: 80 }
];

// Project images to optimize
const projectImagesToOptimize = [
  { name: 'bullrun-cover.png', quality: 80 },
  { name: 'kapstone-cover.png', quality: 80 },
  { name: 'GuestReportingSystem.png', quality: 80 },
  { name: 'healthSyncCover.png', quality: 80 },
  { name: 'MediaSync.png', quality: 80 },
  { name: 'keytake.png', quality: 80 }
];

console.log('🚀 Starting image optimization...');

// Create optimized directory if it doesn't exist
const optimizedDir = 'src/assets/optimized';
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Optimize main assets
console.log('📸 Optimizing main assets...');
for (const image of imagesToOptimize) {
  const inputPath = `src/assets/${image.name}`;
  const webpOutputPath = `src/assets/optimized/${image.name.replace('.png', '.webp')}`;
  const optimizedPngPath = `src/assets/optimized/${image.name}`;
  
  if (fs.existsSync(inputPath)) {
    // Create WebP version
    await optimizeImage(inputPath, webpOutputPath, image.quality);
    
    // Create optimized PNG version
    await optimizePNG(inputPath, optimizedPngPath, image.quality);
  } else {
    console.log(`⚠️  File not found: ${inputPath}`);
  }
}

// Optimize project images
console.log('📸 Optimizing project images...');
for (const image of projectImagesToOptimize) {
  const inputPath = `src/assets/projects/${image.name}`;
  const webpOutputPath = `src/assets/projects/optimized/${image.name.replace('.png', '.webp')}`;
  const optimizedPngPath = `src/assets/projects/optimized/${image.name}`;
  
  // Create optimized directory for projects if it doesn't exist
  const projectOptimizedDir = 'src/assets/projects/optimized';
  if (!fs.existsSync(projectOptimizedDir)) {
    fs.mkdirSync(projectOptimizedDir, { recursive: true });
  }
  
  if (fs.existsSync(inputPath)) {
    // Create WebP version
    await optimizeImage(inputPath, webpOutputPath, image.quality);
    
    // Create optimized PNG version
    await optimizePNG(inputPath, optimizedPngPath, image.quality);
  } else {
    console.log(`⚠️  File not found: ${inputPath}`);
  }
}

console.log('🎉 Image optimization complete!');
console.log('📁 Optimized images saved to: src/assets/optimized/');
console.log('💡 Update your imports to use the optimized versions');
