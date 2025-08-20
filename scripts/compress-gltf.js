import { NodeIO } from '@gltf-transform/core';
import { KHRONOS_EXTENSIONS } from '@gltf-transform/extensions';
import { 
  dedup, 
  weld,
  prune,
  resample
} from '@gltf-transform/functions';

async function compressGLTF() {
  console.log('🚀 Starting GLTF compression...');
  
  const io = new NodeIO()
    .registerExtensions(KHRONOS_EXTENSIONS);

  try {
    // Read the original GLTF file
    const document = await io.read('public/desktop_pc/scene.gltf');
    
    console.log('📁 Original file loaded successfully');
    
    // Apply basic optimizations (without Draco compression to avoid dependency issues)
    await document.transform(
      // Remove duplicate vertices
      dedup(),
      
      // Weld vertices that are close together
      weld({ tolerance: 0.001 }),
      
      // Remove unused data
      prune(),
      
      // Resample animations to reduce keyframes
      resample()
    );
    
    console.log('⚙️ Basic optimizations applied successfully');
    
    // Write compressed file
    await io.write('public/desktop_pc/scene-compressed.gltf', document);
    
    console.log('✅ Compressed model saved as scene-compressed.gltf');
    console.log('💡 Update your component to use the compressed version');
    console.log('📊 Check file sizes:');
    console.log('    Original: public/desktop_pc/scene.gltf');
    console.log('    Compressed: public/desktop_pc/scene-compressed.gltf');
    
  } catch (error) {
    console.error('❌ Error during compression:', error);
    console.log('💡 Alternative compression options:');
    console.log('    1. Use online tool: https://gltf.report/');
    console.log('    2. Install gltf-pipeline: npm install -g gltf-pipeline');
    console.log('    3. Use Blender to re-export with lower poly count');
  }
}

compressGLTF();
