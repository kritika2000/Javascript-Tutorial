// Truthy values -> value that evaluates to true(type coercion)
// Eg: an empty string, null, undefined, number 0, NaN, false are falsy values.

/**
 * Truthy Values:-
 * Everything that is not falsy.
 * 1. true
 * 2. '0'
 * 3. ' ' -> space in string.
 * 4. 'false' -> false in string.
 * 5. {} -> empty object.
 * 6. [] -> empty array.
 * 7. funtion() {} -> empty function
 */

const email = 'test@test.com';

if (email) console.log(email);

let x = false; // false
x = undefined; // false
x = null; // false
x = ''; // false
x = [].length; // false

x = true; // true
x = 'false'; // true
x = []; // true
x = {}; // true
x = Object.keys({}).length; // false.

console.log(Boolean(x));

// Truthy and false caveats
let children = 0;
// 0 will evaluate to falsy value, even if the user selects children.
if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays
// let posts = ['Post One', 'Post Two'];
let posts = []; // Empty array still is truthy value, we need to check the length is arrays is empty or not.
if (posts.length) {
  console.log('List Posts');
} else {
  console.log('No Posts');
}

// Checking for empty objects
const user = {
  name: 'Kritika',
}; // Empty object is truthy value, to check if object is empty or not we can take the lenth of Object.keys() arr, there is not obj.length
if (Object.keys(user).length) {
  console.log('List User');
} else {
  console.log('No user');
}

//  Loose Equality (==)
console.log(false == 0); // true Comparing boolean and number -> type coercion is happening.
console.log('' == 0); // true
console.log(null == undefined); // true
