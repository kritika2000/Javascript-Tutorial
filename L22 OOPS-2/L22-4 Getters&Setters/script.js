/**
 * Getters and setters are functions in a class/constructor-function
 * which are used to set or get values of object properties.
 * Rather than directly tampering with the properties, we use getters
 * and setters, as we can put conditions to set or get those properties,
 * as user can set those properties to any value.
 */

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName; // _ represents private property
    this._lastName = lastName;
  }
  // Now we can have same name as the property for the getter.
  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }
  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }
  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }
  set lastName(value) {
    this._firstName = this.capitalizeFirst(value);
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('John', 'Doe');
console.log(person1.firstName); // we're calling a method like a property.
person1.firstName = 'joe';
console.log(person1);
console.log(person1.fullName);

// Getters and setters are created inside the prototype object.
