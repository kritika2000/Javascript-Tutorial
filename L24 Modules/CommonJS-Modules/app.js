const { capitalizeWords, makeMoney } = require('./utils');
console.log(capitalizeWords('hello world'));
console.log(makeMoney('1000'));

const Person = require('./Person');
console.log(new Person('John', 30));

const axios = require('axios');

async function getPost() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(res);
}

getPost();
