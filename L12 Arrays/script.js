/**
 * In JS, arrays are a special type of object which
 * stores multiple values(can store any type of values(mixed values also));
 * typeof array is an 'object'.
 */

// https://stackoverflow.com/questions/8205691/array-vs-new-array

let x;

//  Array Literal
const numbers = [1, 2, 3, 4, 5]; // More common. typeof arr -> object.

// Creating Arrays using Array Constructor
const fruits = new Array('apple', 'grapes', 'orange');

// Or we can call Array() to create an array object.
// All are kind of same in case of arrays.

x = numbers[0]; // get element at a specific index.

x = `My favourite fruit is ${fruits[2]}`;

x = numbers.length; // length is a property, not a function.

fruits[2] = 'pear';

// We can change the length explicitly;
fruits.length = 1; // Now fruits array will have only one element.

fruits[3] = 'strawberry'; //  ['apple', empty × 2, 'strawberry'], as length was 1 -> sparse arrays.

// better way to add the element to the end of the array
fruits[fruits.length] = 'mango';

console.log(fruits);

console.log(numbers, typeof numbers);

console.log(x);
