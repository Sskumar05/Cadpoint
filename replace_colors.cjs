const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walkDir('c:/Users/divya/OneDrive/Desktop/Cadpoint_Website/Cadpoint/src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Specific gradient replacements
    content = content.replace(/from-electric to-navy/g, 'from-brand-red to-brand-dark-red');
    
    // Text replacements
    content = content.replace(/Navy Blue/g, 'Charcoal');
    content = content.replace(/Electric Blue/g, 'Primary Red');

    // Utility class replacements
    content = content.replace(/\bnavy\b/g, 'charcoal');
    content = content.replace(/\belectric\b/g, 'brand-red');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
