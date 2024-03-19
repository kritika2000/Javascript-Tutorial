// const fs = require('fs');
const path = require('path');
const fs = require('fs/promises');
const { readFile } = require('fs').promises;

// Writing to a file.

// Async Callback Version.

/*
fs.writeFile('file1.txt', 'Hello World', (err) => {
  if (err) throw new Error(err);
  console.log('File Created');
});

fs.writeFile(path.resolve('content', 'test-file.txt'), 'Hello World', (err) => {
  if (err) throw new Error(err);
  console.log('File Created');
});
*/
/*
fs.writeFile('file2.txt', 'Hello')
  .then(() => console.log('File Created'))
  .catch((err) => console.log(err));
*/
// Async Await
async function readAFile(filename) {
  try {
    if (!fs.existsSync(filename)) {
      fs.writeFileSync(filename, 'This is a new file', (err) => {
        if (err) throw new Error(err);
      });
    }
    const res = await readFile(filename, 'utf-8');
    console.log(res);
  } catch (err) {
    console.log('Some Error Occured!');
    console.log(err);
  }
}
readAFile('file5.txt');

//Sync Version
// fs.writeFileSync('file3.txt', 'This is File 3');

// Delete file
async function deleteFile(filename) {
  try {
    if (!fs.existsSync(filename)) {
      console.log("File Doesn't Exist");
      return;
    }
    await fs.unlink(filename);
    console.log('File Deleted');
  } catch (err) {
    console.log('Some Error Occured');
  }
}

deleteFile('file2.txt');

// Rename a File
async function renameFile(oldFileName, newFileName) {
  try {
    await fs.rename(oldFileName, newFileName);
    console.log(`File has been renamed!`);
  } catch (err) {
    console.log('Some Error Occurred');
  }
}
// renameFile('file5.txt', 'file4.txt');

// Create Folder
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log('Folder Created');
  } catch (err) {
    console.log(err);
  }
}

createFolder('Sample-Folder');
