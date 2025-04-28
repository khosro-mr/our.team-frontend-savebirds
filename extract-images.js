const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the output directory exists
const outputDir = path.join(__dirname, 'src/assets/images/team');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Define the coordinates for each profile image [left, top, width, height]
const profiles = {
  'mostafa-rezaee.jpg': { 
    left: 120, 
    top: 296, 
    width: 200, 
    height: 200,
    position: 'center'
  },
  'robert-green.jpg': { 
    left: 250, 
    top: 236, 
    width: 350, 
    height: 350,
    position: 'east'
  },
  'andrew-gregory.jpg': { 
    left: 550, 
    top: 216, 
    width: 400, 
    height: 400,
    position: 'center'
  },
  'hamid-shojaei.jpg': { 
    left: 850, 
    top: 226, 
    width: 380, 
    height: 380,
    position: 'center'
  }
};

// Process each profile image
Object.entries(profiles).forEach(([filename, coords]) => {
  sharp('images/Our-Team.png')
    .extract({
      left: coords.left,
      top: coords.top,
      width: coords.width,
      height: coords.height
    })
    .resize(300, 300, {
      fit: 'cover',
      position: coords.position
    })
    .toFile(path.join(outputDir, filename))
    .then(() => {
      console.log(`Extracted and saved: ${filename}`);
    })
    .catch(err => {
      console.error(`Error processing ${filename}:`, err);
    });
}); 