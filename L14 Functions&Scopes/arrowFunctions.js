// function add(a, b){
//     return a + b;
// }

const add = (a, b) => {
  // take this
  return a + b;
};

const subtract = (a, b) => a - b; // implicit return

// Returning an object
// const createObj = () => {
//   return {
//     name: 'Kritika',
//   };
// };
const createObj = () => ({
  name: 'Kritika',
});

const numbers = [1, 2, 3, 4, 5];

//  Arrow functions in a callback.
numbers.forEach((n) => {
  console.log(n);
});

console.log(add(1, 2));
console.log(subtract(5, 2));
console.log(createObj());
