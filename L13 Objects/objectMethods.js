let x;

// Another way of creating objects
const todo = {}; // Creating empty object(literal) and add properties later.

const todoObj = new Object(); // Creating object using Object constructor, can pass an object to the constructor.

todo.id = 1;

todoObj.id = 1;
todoObj.name = 'Buy Milk';
todoObj.completed = false;

x = todoObj;

const person = {
  address: {
    coords: {
      lat: 42.45643,
      lng: -32.3754,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };
/**
 * The Object.assign() static method copies all enumerable own properties
 * from one or more source objects to a target object.
 * It returns the modified target object.
 */
// Object.assign(target, source1, source2); // can have multiple sources.
const obj4 = Object.assign({}, obj1, obj2); // Works the same as spread operator.

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pick up kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = obj3; // Creates a new object with properties obj1 and obj2.
/**
 * {obj1: {…}, obj2: {…}}
    obj1: {a: 1, b: 2}
    obj2: {c: 3, d: 4}
 */

// Spreading properties of objects in a new object using spread operator.
x = { ...obj1, ...obj2 };
/**
 * {a: 1, b: 2, c: 3, d: 4}
a: 1
b: 2
c: 3
d: 4
*/

x = obj4;

x = todos; // Returns an array of objects.

x = todos[0]; // Accessing individual properties.

x = Object.keys(todo); // Returns an array of object keys -> ['id']

// Get number of properties in an object.
x = Object.keys(obj4).length;

x = Object.values(obj4); // Returns an array of object values.

/**
 * The Object.entries() static method returns an array of a given
 * object's own enumerable string-keyed property key-value pairs.
 */
x = Object.entries(obj4); // returns an array, where each element is an array of two elements -> key and value.
/**
 * 0: (2) ['a', 1] -> [key, value]
   1: (2) ['b', 2]
   2: (2) ['c', 3]
   3: (2) ['d', 4]
 */

x = todoObj.hasOwnProperty('name'); // Check if the object has a property and returns a boolean value.

console.log(x);
