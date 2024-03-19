// Creating getters and setters inside constructor functions.
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;
  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = this.capitalizeFirst(value);
    },
  });
  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = this.capitalizeFirst(value);
    },
  });
  Object.defineProperty(this, 'fullName', {
    get: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  });
}

Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const person = new Person('john', 'doe');
console.log(person.firstName, person.lastName); // calling getters and setters.
console.log(person.fullName);

// With Object Literal
const personObj = {
  _firstName: 'Jane',
  _lastName: 'Doe',
  get firstName() {
    return this._firstName;
  },
  set firstName(value) {
    this._firstName = value;
  },
  get lastName() {
    return this._firstName;
  },
  set lastName(value) {
    this._firstName = value;
  },
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  },
};

const person2 = Object.create(personObj);
console.log(person2.firstName);
console.log(person.lastName);
console.log(person2.fullName);
