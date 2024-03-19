/**
 * Execution Context => It's a special environment created by the JS engine(browser/node),
 * handle transformation and execution of the code. It contains the currently running code.
 *
 * 2 ECs -> Global(only one) and function Execution Context(for each function).
 *
 */

// console.log(y); // undefined
// console.log(x);  Reference Error
let x = 10; // variables created using let are not hoisted i.e. stored in memory during creation of Execution Context.
var y = 20;

function getSum(n1, n2) {
  // this code will be in window object during creation of execution context, just like var.
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(40, 5);

console.log(sum1, sum2);
