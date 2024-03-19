/**
 * Set is a data structure that allow us to store unique values.
 * Released in ES2015
 * Set accepts iterable only.
 */

const set = new Set([1, 2, 3, 4, 5]);
console.log(new Set([1, 1, 2, 3])); // Ignore the duplicate values.
// console.log(new Set(1)); // Error as the numbers is not iterable.

// Add item in an array
set.add(5);

// Checks if an items exists in the Set
console.log(set.has(3));

// Delete an item from an array
set.delete(2);

// Convert a Set to an array
const setArray = Array.from(set);
console.log(setArray);

for (let item of set) {
  console.log(item);
}

// Iterator for a set.
const iterator = set.values(); // returns an iterator for the set
console.log(iterator.next());

// Clear the set
set.clear();

console.log(set);
