const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

fruits.push(berries); // adding an array to an array

let x;

x = fruits[3][1]; // return the second element of last element(array).

x = [fruits, berries]; // creates a new array with two array elements.
/*
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

x = [fruits, berries]; // creates a new array with two array elements with keys "0" and "1".
 [Array(3), Array(3)]0: (3) ['apple', 'pear', 'orange']1: (3) ['strawberry', 'blueberry', 'rasberry']length: 2[[Prototype]]: Array(0)
*/

/*Another way of concatenating arrays.
x = fruits.map((fruit) => fruit);
berries.map((berry) => x.push(berry));
*/

// Concatenating arrays
x = fruits.concat(berries); // doesn't change the fruits array, but returns a new array instead.

// Concatenating arrays using spread operator, Convinient method to combine multiple arrays.
x = [...fruits, ...berries]; // this will spread all the elements of the arrays in this new array.

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat(); // [1, 2, 3, 4, 5, 6, 7, 8]

// Static Methods on Objects
x = Array.isArray(fruits);

x = Array.from('12345'); // ['1', '2', '3', '4', '5']

const a = 1,
  b = 2,
  c = 3;

x = Array.of(a, b, c); // Creates an array of the values passed.

// console.log(fruits);
console.log(x);

/**************************** Challenges *************************** */

const newArr = [1, 2, 3, 4, 5];

// 1. Result -> [6, 5, 4, 3, 2, 1, 0]

newArr.reverse();
newArr.unshift(6);
newArr.push(0);

console.log(newArr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// 2. Result -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const y = [...arr1, ...arr2];
y.splice(5, 1);
console.log(y);
