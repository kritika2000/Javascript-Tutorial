// In JS, every thing essentially is an object or inherits from an object.
/**
 * If we create a variable of a certain data type,
 * that is inheriting properties from the respective prototype.
 * Eg: Number, String, Boolean, Function etc. and each of them has a type of 'function'
 * but they're objects and they also inherit from Object prototype which is highest in the heirarchy.
 * typeof Number(12) -> 'number'.
 */

let x;
const name = 'Kritika';
const age = 20;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old ';

// Using template Literals
// ${} evaluates the expression.
x = `Hello, my name is ${name} and I am ${age} years old`;

// Properties and methods
const str = '    Hello World    ';
/* 
 We can use String prototype methods on this string variable.
 Internally, we are creating a new String object, using String constructor.
 const str = new String("Hello World")
 typeof str -> object.
*/

x = str.length; // gives the length of the string.

x = str[0]; // gives the first character of the string.

x = str.__proto__; // returns the Prototype(String) from which it is inheriting the properties and methods.

console.log(new String('Hello World')); // returns an instance of the String Prototype.

x = str.toUpperCase(); // converts all the letters to uppercase

x = str.toLowerCase(); // converts all the letters to lowercase

x = str.charAt(0); // gives the character at a particular position

x = str.indexOf('l'); // 8, returns the first index of a character, and returns -1 if the character doesn't exist.

x = str.substring(0, 5); // returns the substring between start and end index, returns empty string if the indexes are out of range.
// last index is optional, if not present we returns the substring until the end.

/**
    slice()
    slice(start)
    slice(start, end)
    If the values are positive, it works as substring, but end index is exclusive.
    If values are -ve, they're taken in the following way.
    Negative index counts back from the end of the array — if start < 0, start + array.length is used.
    If start < -array.length or start is omitted, 0 is used.
**/
x = str.slice(-11, -6); // 11 is the length of the string. same as str.substring(-11 + 11, -6 + 11 - 1) -> (0, 4);

x = str.trim(); // removes the whitespaces from the start and end of the string.

x = str.replace('World', 'Kritika'); // replaces the first string with the second.

x = str.includes('Hello'); // true, returns true if the string passed is present in the string.

x = str.valueOf(); // returns the primitive value of the string, we can see the difference if we create the string using String constructor, and logging it will give the object, to extract the value we can use this function.

x = str.trim().split(' '); // splits the string in an array by a separator, empty separator means each character.

console.log(x);

// Challenge - Capitalize the string

const myString = '  hello world  ';

function capitalize(str) {
  str = str.trim();
  let words = str.split(' ');
  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(' ');
}

console.log(capitalize(myString));
