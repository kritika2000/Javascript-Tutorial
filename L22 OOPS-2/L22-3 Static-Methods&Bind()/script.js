/**
 * Static methods are created on the class itself rather
 * than the instance.
 * We call this methods using the classname instead of the
 * instance name.
 */

class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
  static getClass() {
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());
// static methods can't be accessed with instances.
console.log(Rectangle.getClass()); // static method

/****************************** bind() & this **************************** */
// Normal functions take this of the object with which they're called.
// Arror functions have lexical this, i.e. they take this where they're defined.
// We can still bind normal functions to specific objects.

// call(), bind(), apply() can't be used on arrow functions.

// bind() -> returns a new function where this is bind to a specific reference.

function fun() {
  console.log('Hello Kritika!', this);
}

class App {
  constructor() {
    var self = this;
    this.serverName = 'localhost';
    /*document.querySelector('button').addEventListener(
      'click',
      function () {
        // Without binding, this inside this function will point to the element on ehich listener is attached.
        // console.log(self);
        this.getServerName();
      }.bind(this) // explicitly binding this with the external this(current instance)
    );*/
    document.querySelector('button').addEventListener('click', () => {
      this.getServerName();
    });
  }
  getServerName() {
    console.log(this.serverName);
  }
}

// Explicit binding of this.
fun.call(App); // calling this function with App reference.

const app = new App();
console.log(app);
