/**
 * One prototype inherits from another prototype, which make a prototype chain.
 * Eg: Array, String prototype inherits from Object prototype.
 */

function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name ${this.name}`);
};

function Rectangle(name, height, width) {
  // This will create a new property name inside, the instance of current constructor function.
  Shape.call(this, name); // calling Shape function/object with the context of Rectangle
  this.width = width;
  this.height = height;
}

// Inheriting prototype functions
Rectangle.prototype = Object.create(Shape.prototype); // Creates an object of Shape prototype inside the Rectangle

// Overriding prototype of the parent constructor.
Rectangle.prototype.logName = function () {
  console.log(`Rectangle ${this.name}`);
};

function Circle(name, radius) {
  Shape.call(this, name); // calling Shape function/object with the context of Rectangle
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

const rect = new Rectangle('Rectangle1', 20, 20);
const circle = new Circle('Circle1', 5);
console.log(rect, circle);

console.log(new Shape('Hello'));

rect.logName();
circle.logName();
