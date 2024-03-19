function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 30);
const rect2 = new Rectangle('Rectangle 2', 10, 40);

console.log(rect1.name, rect2.name, rect1['width']);

// Creating new properties inside with constructor functions.
rect2.color = 'red';
rect2.perimeter = function () {
  return this.width + this.height;
};
rect1.perimeter = () => rect1.width + rect1.height;

/* 
 The properties created above will be created inside a 
 specific instance, these properties are not shared among all
 instances of the constructor function.
 To create shareable properties, we need to add the properties
 in the proptotype of the constructor function.
*/

// deleting a property from an object
delete rect1.name;

console.log(rect1, rect2, rect2.perimeter());

// Check if a property exist inside an object.
/**
 * The hasOwnProperty() method of Object instances
 * returns a boolean indicating whether this object
 * has the specified property as its own property
 * (as opposed to inheriting it).
 */
console.log(rect2.hasOwnProperty('color'), rect1.hasOwnProperty('color')); // true false

// Get object keys.
console.log(Object.keys(rect2)); // Returns an array containing the object keys.

// Get object values
console.log(Object.values(rect2));

// Get object Entries
console.log(Object.entries(rect1)); // Returns an array of arrays, where each value is an array containing key and value.

for (let [key, value] of Object.entries(rect2)) {
  if (typeof value !== 'function') console.log(`${key} - ${value}`);
}
