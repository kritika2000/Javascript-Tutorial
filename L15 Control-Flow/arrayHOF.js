//  Looping through object values(Can't be done using for-of loop)
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}
// Using Object.entries method.
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
for (const [key, value] of Object.entries(colorObj)) {
  console.log(key, value);
}

// Looping through array keys/indices
const arr = [55, 25, 33, 41];

for (const index in arr) {
  console.log(index, arr[index]);
}

// Iterating over for-of loop
for (const value of arr) {
  console.log(value);
}

/*********************************** Array HOF ********************************** */

// HOF -> a function that is passed inside a function as argument. Eg:- callbacks.

// Array.forEach -> It accepts a callback, which runs for each element of the array. It doesn't return any value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);
socials.forEach((item, index) => {
  // item -> each item in the array.
  console.log(`${index} - ${item}`);
});

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjects = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjects.forEach((item) => console.log(item.name, item.url));

// Array.filter -> filter the array based on the condition returned, and returns only array of filtered results.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (item) {
  return item % 2 === 0;
});

const oddNumbers = numbers.filter((item) => item % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

//  Same with forEach
const evenNumbers1 = [];
numbers.forEach((item) => {
  item % 2 === 0 && evenNumbers1.push(item);
});

console.log(evenNumbers1);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail companies
console.log(companies.filter((company) => company.category === 'Retail'));

// Get companies started in or after 1980 and ended in or before 2005
console.log(
  companies.filter((company) => company.start >= 1980 && company.end <= 2005)
);

// Get companies that lasted 10 years or more
console.log(companies.filter((company) => company.end - company.start >= 10));

// Array.map -> returns a new array with a modified item values.

const numbers1 = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map((number) => 'Number ' + number * 2);
console.log(doubledNumbers);

//  Same with forEach
const doubledNumbers2 = [];

numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2);

// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array with just company and category.
const companyInfo = companies.map((company) => ({
  name: company.name,
  category: company.category,
}));

console.log(companyInfo);

//  Create an array of the length of each comany in years
const companyLength = companies.map((company) => ({
  name: company.name,
  length: company.end - company.start + ' years',
}));
console.log(companyLength);

// Chain map methods

// Get sq root and then double it.
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number)) // This map returns an array
  .map((sqrt) => sqrt * 2); // This function would run on the array returned by the previous map method.

console.log(squareAndDouble);

// Chaining different methods

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((even) => even * 2);

console.log(evenDouble);

// Array.reduce -> reduce the array down to a single value.

// Get sum of all the elements in numbers array
const sum = numbers.reduce(function (accumulator, currentValue) {
  //  accumulator -> previous value.
  return accumulator + currentValue; // previous value + currentValue.
}, 0); // accumulator initial value is 0.

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

//  Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc = acc + curr;
  }
  return acc;
};

// Using forEach
let sum4 = () => {
  let acc = 0;
  numbers.forEach((curr) => {
    acc += curr;
  });
  return acc;
};

console.log(sum3(), sum4());

// Shopping Cart example
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 140 },
  { id: 3, name: 'Product 3', price: 150 },
];

//  Get Total of the prices.

//  One way is to use forEach to map over the array of objects.
let totalPrice = 0;
cart.forEach((item) => {
  totalPrice += item.price;
});
console.log(totalPrice);

// Using reduce method
const totalPrice2 = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(totalPrice2);

/******************************************* Array Challenges ******************************************/

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    age: 25,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'sara@gmail.com',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    age: 23,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    age: 30,
  },
];

// Get people(name, email) who are below or equal to 25
const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((youngPerson) => ({
    name: `${youngPerson.firstName} ${youngPerson.lastName}`,
    email: youngPerson.email,
  }));

console.log(youngPeople);

// Add all positive integers in the array
const nums = [2, -35, 50, 20, -12, -9, 7];

const positiveSum = nums.reduce((acc, curr) => {
  return (acc += curr > 0 ? curr : 0);
}, 0);

console.log(positiveSum);

//  Capitalize Each word of an array
const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.substring(1);
});

console.log(capitalizedWords);
