/**
 * Protoypes - It is an object, where we can attach properties which
 * need to be shared across all instances.
 * Each constructor function has a protoype property which is
 * an object where we can attach properties which can be shared
 * across all instances of that constructor function.
 * By default, we have a function named constructor, already created
 * inside the prototype object.
 */

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

const rect1 = new Rectangle('Rectangle1', 10, 20);
console.log(rect1); // This instance has a prototype object inside it.
// Accessing prototype object from an intance.
console.log(rect1.__proto__, Object.getPrototypeOf(rect1));

console.log(typeof Rectangle.prototype); // object.

/* Array, Function, Number, String, Boolean prototype object(represents the current constructor function)
 itself has prototype object, which represents the Object prototype object */

// Adding properties to the prototype
Rectangle.prototype.area = function () {
  return this.width * this.height;
}; // This function will be created inside the prototype object.

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

console.log(rect1);
console.log(rect1.area(), rect1.perimeter(), rect1.isSquare());

// Alternate way to add properties to the prototype, without using constructor function.
const rectanglePrototype = {
  name: 'Rectangle',
  area: function () {
    return this.height * this.width;
  },
  perimeter: function () {
    return 2 * (this.height + this.width);
  },
  isSquare: function () {
    return this.height + this.width;
  },
};

function createRectangle(height, width) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
  return Object.create(rectanglePrototype, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}
const rect = createRectangle(10, 20); // there will be no constructor inside the prototype.
console.log(rect);
console.log(rect.__proto__);

// creating an object with an existing String prototype and a property called 'name'.
// The prototype object, will contain all the properties of the String prototype.
console.log(
  Object.create(String.prototype, {
    name: {
      value: 'Kritika',
    },
  })
);
