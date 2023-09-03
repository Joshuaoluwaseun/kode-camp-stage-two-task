import path from "path"
import fs from "fs";
import { Readable, Writable } from "stream";

// function copyRecursive(sourceDir, destinationDir) {
//   try {
//     function copyDirectory(source, destination) {
//       fs.readdirSync(source).forEach((item) => {
//         const sourcePath = path.join(source, item);
//         const destinationPath = path.join(destination, item);

//         if (fs.lstatSync(sourcePath).isDirectory()) {
//           fs.mkdirSync(destinationPath, { recursive: true });
//           copyDirectory(sourcePath, destinationPath);
//         } else {
//           const sourceStream = fs.createReadStream(sourcePath);
//           const destinationStream = fs.createWriteStream(destinationPath);

//           sourceStream.on('error', (err) => {
//             console.error(`Error reading from ${sourcePath}: ${err.message}`);
//           });

//           destinationStream.on('error', (err) => {
//             console.error(`Error writing to ${destinationPath}: ${err.message}`);
//           });

//           sourceStream.pipe(destinationStream);
//         }
//       });
//     }

//     fs.mkdirSync(destinationDir, { recursive: true });
//     copyDirectory(sourceDir, destinationDir);
//     console.log('Copy completed successfully.');
//   } catch (err) {
//     console.error(`An error occurred: ${err.message}`);
//   }
// }

// const sourceDirectory = '/sourceDirectory';
// const destinationDirectory = '/destinationDirectory.txt';

// copyRecursive(sourceDirectory, destinationDirectory);


// const path = require('path');
// const fs = require('fs');
// const { Readable, Writable } = require('stream');

function copyRecursive(sourceDir, destinationDir) {
  try {
    function copyDirectory(source, destination) {
      fs.readdirSync(source).forEach((item) => {
        const sourcePath = path.join(source, item);
        const destinationPath = path.join(destination, item);

        if (fs.lstatSync(sourcePath).isDirectory()) {
          fs.mkdirSync(destinationPath, { recursive: true });
          copyDirectory(sourcePath, destinationPath);
        } else {
          const sourceStream = fs.createReadStream(sourcePath);
          const destinationStream = fs.createWriteStream(destinationPath);

          sourceStream.on('error', (err) => {
            console.error(`Error reading from ${sourcePath}: ${err.message}`);
          });

          destinationStream.on('error', (err) => {
            console.error(`Error writing to ${destinationPath}: ${err.message}`);
          });

          sourceStream.pipe(destinationStream);
        }
      });
    }

    fs.mkdirSync(destinationDir, { recursive: true });
    copyDirectory(sourceDir, destinationDir);
    console.log('Copy completed successfully.');
  } catch (err) {
    console.error(`An error occurred: ${err.message}`);
  }
}

const sourceDirectory = './sourceDirectory'; // Replace with your source directory
const destinationDirectory = './destination'; // Replace with your destination director
copyRecursive(sourceDirectory, destinationDirectory);
