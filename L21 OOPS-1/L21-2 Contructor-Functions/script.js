/**
 * Constructor functions allow us to create a blue print, which we can
 * use to create instances.
 * We create instances of constructor function using the "new" keyword.
 * Object literal prototype property doesn't have a constructor function, but
 * constructor functions have.
 */

function Rectangle(name, width, height) {
  // return this; -> This statement is implicit, 'this' is returned by the constructor function.
  /* 
   The below properties(created using this keyword) are 
   separate for each instance of this function.
   These properties are not created in the prototype.
  */
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

/* 
 if we do not use new keyword, then the constructor
 function behaves like regular function.
 */
const rect1 = new Rectangle('Rectangle 1', 20, 10);
const rect2 = new Rectangle('Rectangle 2', 30, 15);

console.log(rect1, rect2);
console.log(rect1.area(), rect2.area());
console.log(rect1 instanceof Rectangle); // true
/**
 * When we use new keyword:-
 * 1. A new empty object is created.
 * 2. The constructor functions is called with the arguments
 *    that we pass in.
 * 3. The `this` keyword is set to the new empty object.
 * 4. The new object is returned from the constructor function.
 */

/**
 * We have built-in constructor functions - String, Number, Boolean etc.
 */

const strLiteral = 'Hello'; // string literal, type of -> string.
// We can also create strings using String constructor
const strObj = new String('Hello'); // type of -> object.

console.log(strLiteral, strObj);

/**
 * Boxing - Though, string literal is not an object but we can still
 * use the protoype functions of String on the literals. JS adds a wrapper
 * object onto a literal.
 * Unboxing - When an object is turned back into a literal.
 */

// Unboxing - using valueOf() method converts back the object into the literal.
console.log(strObj.valueOf(), typeof strObj.valueOf()); // 'Hello', string

console.log(strLiteral.constructor, strObj.constructor);
// String Literal is not an instance of String function.
// But the string object is an instance of String function.

const funcLit = function (x) {
  return x * x;
};

console.log(funcLit, typeof funcLit); // function defination, 'function'

console.log(funcLit(5));

const funcObj = new Function('x', 'return x * x'); // Function Object.

const obj1 = {};
// Behind the scenes, Js is doing the below.
const obj2 = new Object();
