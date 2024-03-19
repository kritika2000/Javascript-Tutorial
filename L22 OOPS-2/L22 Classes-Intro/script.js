/** Classes in JS is syntactical sugar for constructor functions. */

class Rectangle {
  // we initialize the properties in constructor() function.
  constructor(name, width, height) {
    console.log('Constructor Ran!');
    this.name = name;
    this.width = width;
    this.height = height;
    // create a method
    this.func = function () {
      console.log('Hello From Class');
    };
  }
  // creating prototype method.
  area() {
    return this.height * this.width;
  }
  isSquare() {
    return this.height === this.width;
  }
  logArea() {
    console.log('Reactangle Area: ', this.area());
  }
}

// Can still add prototype functions like we do in constructor function.
Rectangle.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};

const rect1 = new Rectangle('Rectangle1', 10, 15);
console.log(rect1);
rect1.func();
console.log(rect1.area(), rect1.perimeter());
console.log(Object.getPrototypeOf(rect1)); // return the prototype object for rect1.
rect1.logArea();
