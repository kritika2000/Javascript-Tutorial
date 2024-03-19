let x;

const num = 5.4567; // typeof num -> number

const numObj = new Number(5); // typeof numObj -> object

console.log(numObj, typeof numObj);
console.log(numObj.valueOf());
console.log(typeof numObj.toString()); // string

// toFixed(n) provides n length after the decimal point; toPrecision(x) provides x total length by rounding off.

x = num.toFixed(2); // converts a number to a string and rounds the string to a specified number of decimals.
// gives string representation in decimals, depending on the precesion.

x = Number(13.3786).toPrecision(5); // gives string representing this number to the specified precision.

x = num.toLocaleString('en-US');

x = Number.MAX_VALUE; // gives the largest number possible in JS -> 1.7976931348623157e+308

x = Number.MIN_VALUE; // gives the smallest number possible in JS -> 5e-324

console.log(x, typeof x);
