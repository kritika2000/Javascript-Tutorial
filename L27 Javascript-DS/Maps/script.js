/**
 * Map is also a Data Structure which stores values as
 * (key, value) pairs
 */

const map = new Map();

// Add a key-value pair
map.set('name', 'Kritika');

// Get a key
console.log(map.get('name')); // Kritika -> returns the value corresponding to the key.
console.log(map.get(1)); // undefined, if key doesn't exist.

// Check if a key exist
map.set(1, 'blue');
map.set(2, 'John');
console.log(map.has('name')); // true

// Delete a key from a map
map.delete(1);

// Iterate over a map
const peopleMap = new Map();
peopleMap.set('brad', { phone: '555-555-5555', email: 'john@gmail.com' });
peopleMap.set('jack', { phone: '555-555-5555', email: 'brad@gmail.com' });
peopleMap.set('jill', { phone: '555-555-5555', email: 'jill@gmail.com' });

peopleMap.forEach((person) => console.log(person.email));
console.log(peopleMap.entries()); // Returns a map iterator, same for keys & values.

const iterator = peopleMap.entries();
for (const item of iterator) {
  console.log(item);
}

// Convert to Arrays
console.log(Array.from(map));

console.log(map);
