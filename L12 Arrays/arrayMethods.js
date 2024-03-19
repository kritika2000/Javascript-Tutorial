const arr = [34, 55, 95, 20, 15];

/************************ Manipulate the original array *********************** */

// Adding the value at the end of the array
arr.push(100);

// Remove the last element from the array
arr.pop();

// Adding an element at the beginning of the array at 0th index.
arr.unshift(99);

// Remove an element from the beginning of the array.
arr.shift();

// Reverse the array
arr.reverse();

console.log(arr);

/************************* Get Info from an array ************************** */

// Check if a value exists in the array.
let x;
x = arr.includes(200); // false

x = arr.indexOf(13); // returns the index of element, if index is out of range it returns -1.

x = arr.slice(1); // gives the array between starting and end index.
// end index is optional and is exclusive.

x = arr.splice(1, 4);
// changes the original array, which will contains the remaining array.
// It basically plucks out elements from the array.

console.log(x, arr);
