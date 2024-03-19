// If statements -> control the flow of the code.
// if expression evaluates to true -> the block of code would run
if (true) {
  console.log('This is true');
}

const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}

// if and else blocks have their own scope.
// variables created using let and const, the variables can't be
// accessed outside of the block unlike var.

// Shorthand If
if (x > y)
  console.log(`${x} is greater than ${y}`), console.log('This is true');
// Removing curly braces, and execute multiple statements separated by comma.
else console.log(`${x} is less than ${y}`);

/************************************ If-Else *********************************** */
const d = new Date(10, 30, 2022, 20, 0, 0);
const hour = d.getHours();
console.log(hour);

if (hour === 6) {
  console.log('Wake Up!');
} else if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Night!');
  if (hour >= 20) {
    console.log('zzzzzzzzz....');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}

/**************************************** Switch ******************************************** */
const date = new Date(2022, 2, 10, 15, 0, 0);
const month = date.getMonth();
const hours = date.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break; // works as return -> stope execution of further switch statements.
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not January February March');
}

switch (true) {
  case hours < 12:
    console.log('Good Morning!');
    break;
  case hours < 18:
    console.log('Good Afternoon!');
    break;
  default:
    console.log('Good Night!');
}

/********************************** Calculator Challenge ****************************** */

const calculator = (a, b, op) => {
  let result = 0;
  switch (op) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      console.error('Not an arithmetic operator!');
  }
  console.log(result);
};

calculator(10, 5, '+');
calculator(10, 5, '-');
calculator(10, 5, '*');
calculator(10, 6, '/');
calculator(10, 5, '&');
