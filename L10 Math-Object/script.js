/**
 * In JS, we have a Math object to perform math operations -> sqrt, floor etc.
 */

let x;

x = Math.sqrt(10); // gives the decimal representation of square root of 10.

x = Math.abs(-15); // 15

x = Math.abs(1.56); // 1.56

x = Math.round(4.5); // round the integer 4.49 -> 4, 4.5 -> 5

x = Math.ceil(4.2); // round up to 5 -> give the smallest number(int) greater that the number.

x = Math.floor(4.6); // round down to 4 -> gives the greatest number less than the number.

x = Math.pow(2, 3); // 8

x = Math.min(4, 3, 5); // 3

x = Math.max(4, 6, 3); // 6

x = Math.random(); // gives random decimal between 0 and 1.
// Using random method we usually want to get a number between a range (say 1 to n etc.);
// To achieve this we multiply the number by n accordingly.
// To make this a whole number, we can just round the number returned down.

let y = Math.random() * 100; // random decimals between 0 to 99
console.log(y);

x = Math.floor(Math.random() * 100 + 1);
// console.log(Math);
console.log(x);

// Number Challenge
let a = Math.floor(Math.random() * 100 + 1); // random numbers between 1 and 100.
let b = Math.floor(Math.random() * 50 + 1);

/**
 * Random Numbers between a range:-
 * function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 */

console.log(a, b);
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a % b);
