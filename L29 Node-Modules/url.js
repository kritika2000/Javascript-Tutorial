const url = require('url');
const querystring = require('querystring');

// url.parse() -> returns an object with info about the url
const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);
/**
 * Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'example.com',
  port: null,
  hostname: 'example.com',
  hash: null,
  search: '?id=1000&premium=true',
  query: 'id=1000&premium=true',
  pathname: '/listing',
  path: '/listing?id=1000&premium=true',
  href: 'https://example.com/listing?id=1000&premium=true'
}
 */

// url.format(); -> Creates a URL from an object like we get from url.parse
const myUrl2 = url.format({
  protocol: 'https',
  slashes: true,
  auth: null,
  host: 'example.com',
  port: null,
  hostname: 'example.com',
  query: {
    id: 1000,
    premium: true,
  },
});

console.log(myUrl2);

// querystring.parse(); -> gives an object with query params as key-value pairs
const myQs = 'year=2023&month=january&day=20';
const q = querystring.parse(myQs);
/**
 *  { year: '2023', month: 'january', day: '20' }
 */
console.log(q);

// querystring.stringify() -> creates a string out of a query object
const myQs2 = querystring.stringify({
  year: 2023,
  month: 'January',
  day: 20,
});

// year=2023&month=January&day=20
console.log(myQs2);
