// Implicit type conversion -> happens when we compare using ==

let x;

x = 5 + '5'; // 55 string -> JS implicitly converts x into a number.
x = 5 + 5; // 10 number
x = 5 * '5'; // 25 number -> multiply string and a number doesn't make sense, though with addition we concatenated both the strings.
x = 5 + null; // 5 number -> null is coerced into 0.
x = 5 + true; // 6
x = 5 + undefined; // NaN undefined will not be coerced into a number.
x = 5 + ''; // 5 string

console.log(Number(null), Number('56'), Number(false), Number(''), Number('0')); // falsy values coerced to 0
console.log(x, typeof x);
