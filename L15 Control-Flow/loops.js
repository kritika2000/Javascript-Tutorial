/********************************** for loop ********************************** */

// for loop -> for ([initialExpr]; [conditionExpr]; [incrementExpr]){ statements }

for (let i = 0; i < 10; i++) {
  console.log(i); // (0 - 9) -> This loop will execute until i < 10.
}

// console.log(i); // since we created (i) using let, i is not accessible here unlike var.

for (let i = 0; i <= 10; i++) {
  if (i === 7) console.log('7 is my lucky number');
  else console.log('Number' + i);
}

// Nest Loops
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array
const names = ['Kritika', 'John', 'Jane', 'Sara', 'Tim'];

for (let i = 0; i < names.length; i++) {
  let str = names[i];
  str += i === 2 ? ' is the best' : '';
  console.log(str);
}

// Break
for (let i = 0; i <= 20; i++) {
  console.log(i);
  if (i === 15) break; // the loop will end here
}

// Continue
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13th floor');
    continue;
  } // skips the code.
  console.log(i);
}

/********************************** while loop ********************************** */
console.log('WHILE LOOPS');
let i = 0;
while (i <= 20) {
  console.log('Number ' + i);
  i++;
}
//  Work the same as for loop.

// Loop over arrays
const arr = [10, 20, 30, 40];
i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
console.log('DO WHILE LOOP');
i = 21;
// Do block will always run without checking the condition.
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);

/********************************** Challenge - FizzBuzz ********************************** */

/**
 * Print numbers 1 to 100
 * For multiples of 3 print "Fizz"
 * For multiples of 5 print "Buzz"
 * For multiples of 3 and 5 print "Fizz Buzz"
 */

for (let i = 1; i <= 100; i++) {
  let str = '';
  if (!(i % 3)) str = 'Fizz';
  if (!(i % 5)) str += 'Buzz';
  str.length ? console.log(str) : console.log(i);
}

/********************************** for of loop ********************************** */
const items = ['book', 'table', 'chair'];

/**
 * for(item of arrayName){ console.log(item) }
 */

const users = [{ name: 'Kritika' }, { name: 'Kate' }, { name: 'Steve' }];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user); // each object in the array
}

const user = {
  // Can't iterate properties of a single object using for-of loop.
  name: 'Kritika',
  age: 20,
};

// Loop over strings
const str = 'hello world';

for (const letter of str) {
  console.log(letter); // give earch letter of the string.
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  /**
  * name John
    age 30
  */
  console.log(key, value);
}

/** Loops work for iterables only like arrays, arrays of objects, maps, string etc. */
