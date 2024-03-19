/* 
  Scope refers to the current area/context of a piece of code.
*/

// 2 scopes -> global and function scope.

// window is the top most object in the hierarchy.
// window.alert('Hello');

const x = 100;
console.log(x, 'in global');

function run() {
  console.log(window.innerHeight);
}

run();

if (true) {
  const x = 150;
  console.log(x, 'in block');
}

function add() {
  const y = 50;
  console.log(y);
}

// console.log(y); // Reference error -> y can't be accessed here in global scope.

// variables from outer scope are accessible in inner scope, eg:-
// variables declared in global scope can be accessed inside function(function scope) defined in global scope

// var is function scoped but const, let are block scoped.

for (let i = 0; i <= 10; i++) {
  // i will be accessible inside this for loop block only(block scoped).
  console.log(i);
}

console.log(i); // undefined, if created using const and let.

for (var i = 0; i <= 20; i++) {
  console.log(i);
}

console.log(i); // 21, in case of var

//  Creating global variables with var or let/const.
const foo = 1;
var bar = 2; // this variable will be created on the window object.

console.log(window.bar, window.foo); // 2 undefined.

// It is not a good practice to create global variables using var, use let/const as much as possible.
