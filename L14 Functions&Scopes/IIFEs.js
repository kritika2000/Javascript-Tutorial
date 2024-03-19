// These are anonymous functions(can be named also) and are invoked at the same time they're created.
// This prevents Global Namspace Polution.
const user = 'Kritika';
console.log(user);

/********************************** Challenges ******************************* */

// 1. get Clecius from Faranheit

const getCelcius = (f) => {
  return ((f - 32) * 5) / 9;
};

console.log(getCelcius(97));

// 2. Create an arrow function to get the minimum and maximun value from an array in an object
// https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa#:~:text=of%20Math%20object-,The%20Math.,of%20zero%20or%20more%20numbers.&text=The%20destructuring%20assignment%20syntax%20is,or%20objects%20into%20distinct%20variables.
const getMinMax = (...arr) => ({
  // rest
  min: Math.min(...arr), // Spread
  max: Math.max(...arr),
});

console.log(getMinMax(1, 2, 3, 4, 5, 6));

// 3. Create an IIFE, that takes length and width of a rectangle.
(function (l, b) {
  console.log(l * b);
})(2, 3);
