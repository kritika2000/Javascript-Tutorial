const firstName = 'John';
const lastName = 'Doe';
const age = 30;
let x;

// Since both keys and values are same, we can skip mentioning value name.

/*
  const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};
*/

const person = {
  firstName,
  lastName,
  age,
};

x = person;

// Destructuring
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

// Destructuring properties with same name, but we can rename the properties as well.
const { id, title: name, user } = todo;

// x = title; Now reference after renaming.
x = name;

x = user;

//  Destructure arrays
const numbers = [23, 67, 33, 49];
const [first, second, ...rest] = numbers; // Rest operator -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters.

x = first;

x = rest; // gives the remaining elements in an array -> [33, 49].

console.log(x);
