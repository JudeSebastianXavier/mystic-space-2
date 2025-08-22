import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing build process...');

try {
  // Clean previous build
  if (fs.existsSync('dist')) {
    console.log('🗑️  Cleaning previous build...');
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Run build
  console.log('🔨 Running build...');
  execSync('npm run build:client', { stdio: 'inherit' });
  
  // Check build output
  console.log('📁 Checking build output...');
  const distPath = path.join(__dirname, 'dist');
  
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    console.log('✅ Build directory created with files:', files);
    
    // Check for index.html
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      console.log('✅ index.html exists');
      
      // Check content
      const content = fs.readFileSync(indexPath, 'utf8');
      if (content.includes('mystic-space-2')) {
        console.log('✅ Base path correctly configured');
      } else {
        console.log('❌ Base path not found in index.html');
      }
    } else {
      console.log('❌ index.html missing');
    }
  } else {
    console.log('❌ Build directory not created');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 