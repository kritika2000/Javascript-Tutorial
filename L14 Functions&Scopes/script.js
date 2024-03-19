/**
 * Function -> A block of code that does a specific task.
 * We can reuse the function at various places in the code,
 * rather repeating the same functionality again and again.
 */

function sayHello() {
  // function declaration
  console.log('Hello World');
}

sayHello();

// Parameters -> variables in the function itself, arguments are variables passed when calling the function.

function add(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2; // returning something from the function.
}

let result = add(1, 2);
console.log(result);
