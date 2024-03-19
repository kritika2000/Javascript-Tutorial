// We work a lot with APIs in javascript, and we use JSON now to exchange data beween client and server.
/* The below won't work for ES6 module -> 
Unfortunately, ES6/ES2015 doesn't support loading JSON via the module import syntax.'
We either need to use JS file and export our data from there, this is issue is on client side,
as on server side we use require method to do so, and that works.
Can use webpack, babel to do this or simple use async fetch method to fetch the file.
https://stackoverflow.com/questions/34944099/how-to-import-a-json-file-in-ecmascript-6
*/
// import todos from './todo.json';
// const todos = require('./todo.json'); // Will give todos when the file is run in node.
let x;
const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

x = post;
// Convert JS object to JSON string
const str = JSON.stringify(post); // We usually send JSON string to the server.
/**
 * {"id":1,"title":"Post One","body":"This is the body"}
 */

// Convert JSON string to JS object
const obj = JSON.parse(str);

x = str;

x = obj;

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(x);
// console.log(todos);

/************************** Challenge ************************** */

// 1. Construct an array of objects.
const library = [
  {
    title: 'Title 1',
    author: 'Author 1',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Title 2',
    author: 'Author 2',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Title 3',
    author: 'Author 3',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// 2. Set read value for all object to true, do edit the initial object.

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// 3. Destructure the title from the first book and rename the variable to firstBook.

const { title: firstBook } = library[0];
console.log(firstBook);

// 4. Turn the library object into a JSON string.

const jsonStr = JSON.stringify(library);
console.log(jsonStr);
