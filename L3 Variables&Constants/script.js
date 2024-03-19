/**
 * Variables are pieces of containers that holds some data.
 */

// Ways to declare a variables:- var, let, const.
/**
 * var was used before ES6, now let and const are used, as it causes global
 * name space pollution and the problem with it's scope.
 * var  -> functions scoped.
 * let, const -> block scoped.
 */

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);
let age = 23;

/**
 * Variables created using let and const are not hoisted, that is we can't use
 * them before they're declared.
 * the variables using var are hoisted, but if we use them the value will be undefined.
 */

/** Redeclaration variables */
/** Not Allowed.
let age = 30;
 */
// Allowed
var x = 20;
var x = 10;
// With let we can't created two variables with same name in same scope, but var allows it.
console.log(x);

// console.log(score); Can't use score before initialization Error
let score = 1;
if (true) {
  score = score + 1;
}
console.log(score);

/** let and const works the same way in terms of scope, but reassignment is not possible in const. */

const arr = [1, 2, 3, 4];
// We can't directly reassign the variable created using const using '=', but
// we can use functions to update the array.

const person = {
  name: 'Kritika',
};

person.name = 'John'; // Allowed.

// Declare multiple values at once.
let a, b, c;
const d = 10,
  e = 20,
  f = 30;
console.log(d);
