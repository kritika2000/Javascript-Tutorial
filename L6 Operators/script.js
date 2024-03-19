// Arithmetic Operators

let x;
x = 5 + 5; // 10;
x = 5 - 5; // 0;
x = 5 * 5; // 25
x = 5 / 5; // 1
x = 7 % 5; // 2(remainder)

// Concatenation
x = 'Hello' + ' ' + 'World'; // Hello world
x = '44' + 1; // 441

// Exponent
x = 2 ** 5; // 32

// Increment(Pre, Post)
x = 1;
x++;
++x;
// Decrement
x--;

// Assignment
x += 5;

// Comparison Operators(==, ===(Equality))
x = 2 == 2; // true
x = 2 === 2; // true

// == only tests the value, not type but === checks both.
x = 2 === '2'; // false;
x = 2 == '2'; // true;
console.log(x);

/**
 * Equality and Sameness
 * == does the type coersion
 * === does not do type conversion when comparing, so if type differs the answer will be false.
 * Strict Equality is recommended.
 */

const num = 0;
const obj = new String('0'); // creates a new String object {0: "0"}
const str = '0';

/*
console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true
*/
console.log(num === obj); // false
console.log(num == obj); // true
console.log(num === str); // false
console.log(num == str); // true
console.log(obj === str); // false
console.log(obj == str); // true
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

console.log(null == undefined); // true
console.log(null !== undefined); // true
