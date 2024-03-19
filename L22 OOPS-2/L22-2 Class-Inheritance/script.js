class Shape {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log(`Shape Name: ${this.name}`);
  }
}

class Rectangle extends Shape {
  constructor(name, height, width) {
    // This step is same as calling the constructor of Shape with the context of rectangle.
    super(name); // call the constructor of the parent class
    this.height = height;
    this.width = width;
  }
  // Polymorphism
  logName() {
    console.log('Rectangle Name: ', this.name);
  }
}

const rect = new Rectangle('Rectangle 1', 20, 30);
console.log(rect, rect.__proto__);
/* 
We can directly call this function created inside the 
parent class as the prototype object of Rectangle class
is automatically set to the object created using Shape prototype
Which we have to do explicitly in constructor functions.
*/
rect.logName();

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
}

const cir = new Circle('Circle 1', 20);
cir.logName();

console.log(rect instanceof Shape); // true

// Rectangle inherits from Shape and Shape inherits from Object.
// Rectangle prototype object contains constructor/func() functions.
// Shape has constructor and func() in its prototype.
