// alert("Hello From JS File");
// console is an object with a bunch of functions.
/*
console.log(console);
console.log('Hello', '20', true); // logging multiple values(can be heterogenous) to the console.

const x = 100;
console.log(x);

console.log('Logging using JS code Snippets Extention');
console.error('Alert'); // Shows the error(in red).
console.warn('Warning'); // Shows the warning(in yellow).
console.table({ name: 'Kritika', email: 'kritika.fbd2000@gmail.com' }); // Shows a table in console and each property in the object will occupy a row.

const styles = 'padding : 10px; background-color: white; color: green';
// By adding %c at the beginning of the string, we can apply styles to the string.
console.log('%cHello World', styles);
*/

const curry = (fn) => {
  return (curried = (...args) => {
    console.log(args);
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};
const totalNum = (x, y, z) => {
  return x + y + z;
};
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10)(20)(30));
