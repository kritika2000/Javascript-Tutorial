const path = require('path');

const myPath = 'folder/subfolder/index.js';

// Basename
const base1 = path.basename(myPath); // index.js
const base2 = path.basename(myPath, '.js'); // index do not get the extension

console.log(base1, base2);

// Extension Name
const ext = path.extname(myPath); //.js, gives nothing if there is no file at the end of the path.
console.log(ext);

// Dirname() -> gives the directory path of the path passed.
const dir = path.dirname(myPath);
console.log(dir); // folder/subfolder

// Join() -> joins the strings and create a relative path.
const joinedPath = path.join('folder', 'subfolder', 'file.js');
console.log(joinedPath);

// Resolve() -> Creates absolute path
const myPath2 = path.resolve('subfolder', 'index.js');
console.log(myPath2);

// __dirname -> gets the current directory.
console.log(__dirname);

// __filename
console.log(__filename); // Gives the file including path.
