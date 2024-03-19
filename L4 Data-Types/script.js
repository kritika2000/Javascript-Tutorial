/**
 * JS has some data types
 * 1. Primitive Data Types
 * 2. Reference Types(Objects, Array).
 */

/**
 * Primitive DTs
 * String -> sequence of characters. must be in quotes or backticks(string literals).
 * Number -> can be integers or floating points.
 * Boolean -> Logical Entity(true/false).
 * Null -> Intentional absence of any object/value.
 * Undefined -> variable that has not yet been defined/assigned.
 * Symbol -> Built-in object whose constructor returns a unique symbol.
 * BigInt -> Numbers that are greater than the Number type can't handle.
 */

/**
 * Reference Types(Objects or Arrays)
 * These are non-primitive types and when assigned to a variable,
 * the variable is given a reference to that value.
 * Object literals, arrays and functions for all reference types.
 */

/**
 * Javascript is a dynamically typed language i.e. we do not explicitly
 * define the types for our variables.
 * Eg: In C++, we have 'int a = 10'.
 * But with Typescript, we can do static typing which make the code less error prone.
 */

/**
 * every PDT, inherits from their respective prototype i.e. string inherits from String.
 * So, the string variable can use method of String prototypes.
 * str.__proto__ == String.prototype.
 */
//String
const firstName = 'Sara';
const output = firstName;
console.log(output, typeof firstName); // Sara string.

//Number
const age = 30;
const temp = 98.99;

console.log(temp, typeof temp); // 98.99 number

// Boolean
const hasKids = true;
console.log(hasKids);

// Null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber); // null object.

/**
 * In first implementation, of JS, JS values were represented
 * as a type tag and a value. null has o tag and null value, hence it give
 * the type as 'object'. But ideally it's a primitive DT.
 */

// undefined
let score; // unlike const, let allows us to leave the variables uninitialized
console.log(score, typeof score); // undefined undefined.

//Symbol
const id = Symbol('id');
console.log(id);

// BigInt
// n in the end of the number represents bigInt, otherwise, it would show
// the value as exponential number type only.
const n = 9037943275925678346589n;
console.log(n, typeof n);

// Reference Types(Objects, Functions, Arrays etc.)
/**
 * Every reference type is an object.
 */
// arrays
const arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr); // [1, 2, 3, 4, 5] object.

// object literal
function changePerson(person) {
  person.name = 'Aman';
}
const person = {
  name: 'Kritika',
};
changePerson(person);
// the value of person is passed by reference and will update the original person as objects are stored in heap.
console.log(person, typeof person);

// function
function myFunc() {
  return 'Hello World';
}
// Functions are still objects.
console.log(myFunc(), typeof myFunc); // Hello World function.

/**
 * How primitive and reference DTs are stored?
 * Primitive DTs are stored directly in stack
 * Reference Types are stored in the heap and accessed by heap.
 */

/**
 * Primitive variables are stored on stack, if we pass a PDT to a function
 * a new variable is created with the value passed.
 * But RDTs are stored on heap, i.e. their value is stored on heap but
 * their reference is stored on stack, so they'are accessed by their reference
 * hence, if we pass a variable of RDT in a functon and change that, the values will
 * be updated in the original variable, as we are updating the data store using the
 * reference passed.
 */

let name = 'Kritika';
let newName = name;
// name and newName will be separate variables created on stack.

let newPerson = person;
/* newPerson and person will be separate variable storing the reference of person object,
created on stack but the actual data they're pointing to will be stored on heap.
Both person and newPerson are poiniting to same data in heap, so updating it
with person or newPerson will be updating the same data.
*/
console.log(name, newName);
console.log(person, newPerson);
