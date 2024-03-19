/**
 * OOP is a programming paradigm or a way of thinking
 * about and structuring code. It is a specific style to
 * implement certain principles.
 */

/**
 * Self-Contained piece of code that is a collection of
 * methods & properties. Objects are used as building blocks
 * and can interact with one another.
 * In JS we can create objects using object literals, constructor
 * functions, classes etc.
 */

/**
 * Basic Principals of OOP:-
 *
 * 1. Abstraction - Hiding all but relevant parts of an object in order to
 * reduce complexitiy and increase efficiency.
 *
 * Eg:- using APIs or built-in methods are a perfect example
 * of abstraction, as we don't know how they work under the hood.
 *
 * 2. Encapsulation - The process of wrapping up data and methods
 * into a unit such as a class or a function. Encapsulation usually
 * inlcudes some kind of data hiding.
 *
 * 3. Inheritance - The process of inheriting the properties and
 * methods from a parent class or constructor.
 *
 * 4. Polymorphism - many forms, eg:- function overloading, where we
 * use different methods with same name.
 */

/**------------------------------- Object Literals ---------------------------- */

const rectangle = {
  name: 'Rectange1',
  width: 20,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

// This keyword is bind at runtime. This represents the current execution context.
/**
 * We should not use arrow functions inside object literals, as arrow functions,
 * take the this of the context in which they are created.
 * If we're not using this inside arrow methods, then we can create.
 * Normal functions take the this with the context they're called.
 * Eg:- we can call the functions with dot notation.
 */

console.log(rectangle.name);
console.log(rectangle.area());
console.log(this);

var obj = {
  fun: function () {
    console.log(this);
    (() => {
      console.log(this); // If arrow function, then it will be the obj object.
    })();
  },
};

// const f = new fun();
obj.fun();

/* 
 We can't have multiple instances using object literals,
 eg: we want to create 100 rectangles, we have to create
 100 different object literals for that.
 So, better solution is to create a blueprint and create multiple 
 instances.
*/
