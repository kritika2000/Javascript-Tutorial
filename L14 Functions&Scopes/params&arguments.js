function registerUser(user) {
  console.log(arguments); // an object which contains params of the current function.
  return user + ' is registered ';
}

console.log(registerUser('Kritika'));

// Default Parameters from ES6
//  Default params should be in the end.
function registerUserDefault(user = 'Bot') {
  return user + ' is registered ';
}

console.log(registerUserDefault());

//  Rest Params
function sum(...numbers) {
  console.log(arguments);
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
  //   return numbers; // Returns the array containing all the params.
}

console.log(sum(1, 2, 3, 4, 5));

//  Objects as Params
/*function loginUser(user) { 
  console.log(user);
}
*/
function loginUser({ name, age }) {
  // destructuring object properties
  console.log({ name, age }, name, age);
}
const user = {
  name: 'John',
  age: 20,
};

loginUser(user);
loginUser({ name: 'Aman', age: 25 });

// Arrays as params
function getRandomNumber(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomNumber([1, 2, 3, 4, 5]));
