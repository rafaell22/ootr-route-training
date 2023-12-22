// @ts-check

import file from './file.js';
import readLine from './readline.js';

/**
 * @param {string} filePath
 * @returns {Promise<object>}
 */
export default async function(filePath) {
  let files;
  try {
    // Read all files in folder
    files = await file.read.all(filePath);
    console.log('files: ', files);
  } catch(errorGettingFilesList) {
    console.log('Error getting files list!');
    console.log(errorGettingFilesList);
    return;
  }

  const numberOfFiles = files.length;

  for(let filesCount = 0; filesCount < numberOfFiles; filesCount++) {
    console.log(`  (${filesCount + 1}) - ${files[filesCount]}`);
  }

  let fileIndex;
  try {
    // Ask user to select a file to read
    while(true) {
      fileIndex = await readLine.questionAsync('Choose a file number --> ');
      if(
        isNaN(fileIndex) ||
        fileIndex <= 0 ||
        fileIndex > numberOfFiles
      ){
        console.log('- Invalid file number!!');
        continue;
      }

      break;
    }
  } catch(errorGettingFileChoice) {
    console.log('Error getting file to read!');
    console.log(errorGettingFileChoice);
  }

  // Read file data
  const fileName = files[fileIndex - 1];
  let fileData;
  try {
    fileData = await file.read.any(fileName, filePath);
  } catch(errorReadingFile) {
    console.log('Error reading file!');
    console.log(errorReadingFile);
  }

  return fileData;
}
