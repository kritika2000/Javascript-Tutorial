/**
 * Object Literal is a DS that hold data as key value pairs.
 */

let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main Street',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person; // logs person object to the console.

x = person.name;

// Can use bracket notation to access the properties.
x = person['age']; // 30

x = person.address.state;

x = person['hobbies'][0];

// Updating properties

person.name = 'Jane Doe';
person['isAdmin'] = false;

// Removing Properties
delete person.age;

// Add function as a property
person.hasChildren = true;
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
person.greet();

// No a recommended way of creating properties
person['first name'] = 'Kritika'; // If property name has spaces, then we've to use bracket notation to add or access them.

x = person;

console.log(x);
