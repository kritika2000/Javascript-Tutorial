/**
 * Type-Conversion and Type-Casting is a way of explicitly
 * converting a value from one type to another.
 * Eg: we have a string value of "5" and we want to convert it
 * to a number 5.
 * Type-Coersion -> Implicit type conversion.
 */

let amount = '1000';
let numInt = 56;
console.log(amount, typeof amount); // "1000" string
amount = parseInt(amount); // converts the data type to an integer.
console.log(amount, typeof amount); // 1000 number
console.log(numInt, parseFloat(numInt), typeof numInt); // converts float to integer.
// amount = +amount -> using unary operator to convert it to a number.
// amount = Number(amount); // converts string to number.

let amt = '1000hello';
console.log(Number(amt)); // Will return NaN.

/** Change number to string */
let number = 100;
let strNumber = String(number); // Using String Constructor.
let strNumber2 = number.toString();
console.log(strNumber, typeof strNumber); // 1000 string
console.log(strNumber2, typeof strNumber2); // 1000 string

/** Change String to Decimal */
let num = '45.5';
// 45.5 45.5 number
console.log(num, parseFloat(num), typeof num); // converts string to float.
console.log(parseInt(num)); // 45

/* Convert number to boolean */
amount = Boolean(amount);
console.log(amount); // 0, undefined, null are falsy values.
console.log(Boolean(null), Boolean(undefined), Boolean('')); // false false false

/**
 * NaN -> it is returned, when the do not get a real number when doing some operation.
 */
console.log(typeof NaN); // number
