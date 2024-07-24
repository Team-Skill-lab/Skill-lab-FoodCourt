const fs = require('fs');
const path = require('path');

// Use the absolute path to the images directory
const directoryPath = 'F:\\Skill-lab-FoodCourt\\images';

// Function to convert an image to base64
function convertImageToBase64(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return fileBuffer.toString('base64');
}

// Function to read images from a directory and convert them to base64
function convertImagesInDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  const base64Images = files.map(file => {
    const filePath = path.join(directoryPath, file);
    const base64String = convertImageToBase64(filePath);
    return {
      fileName: file,
      base64: base64String
    };
  });
  return base64Images;
}

// Convert all images in the directory to base64
const base64Images = convertImagesInDirectory(directoryPath);

// Print base64 images or save to a file/db
console.log(base64Images);

// Optionally, save the base64 strings to a JSON file
fs.writeFileSync('base64Images.json', JSON.stringify(base64Images, null, 2));
