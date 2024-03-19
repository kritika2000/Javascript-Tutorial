// ||= -> assigns the right side value only if the left is a false value.

let a = false;

if (!a) {
  a = 10;
}

//  Shorter vay of doing the above.
a = a || 10; // assigns 10 to a if a is falsy value.
a = !a || 0 || 20 || 30; // 20

console.log(a);

// &&= -> assigns the right side value only if the left is a truthy value.

let b = 20;

// if (b) {
//   b = 20;
// }

b = b && 30; // if b is false, no value will be assigned to b.
b &&= 40;

b = b && 10 && 20 && 0; // 0

console.log(b);

// OR -> As soon as we find a true value, we assign it.
// AND -> As soon as  we find a false value, we assign it.

// ??= -> assigns the right side value only if the left is null or undefined.

let c = undefined;

// if(c === undefined || c === null){
//     c = 20;
// }

c ??= 20 && 30; // 30

console.log(c);

/************************************ Ternary operators ************************************* */
const age = 19;

// Using an if statement
if (age > 18) console.log('You can vote');
else console.log('You can not vote');

//  Using a ternary operator
age > 18 ? console.log('You can vote') : console.log('You can not vote');

// Assigning a consitional value to a variable;
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You can"t vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;
let redirect;
if (auth) {
  alert('Welcome to the dashboard');
  redirect = '/dashboard';
} else {
  alert('Access Denied');
  redirect = '/login';
}
const redirect2 = auth
  ? (alert('Welcome to the dashboard'), '/dashboard') // same as using multiple statements in if without braces.
  : (alert('Access Denied'), '/login');
// console.log(redirect);
console.log(redirect2);

auth ? console.log('Welcome to the dashboard') : null;
auth && console.log('Welcome to the dashboard'); // If we don't want to the else part.
