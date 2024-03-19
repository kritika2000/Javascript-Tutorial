/**
 * Symbols are Primitive Data Types.
 * Symbols are used to create unique identifiers for objects.
 */

const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');
console.log(sym, sym1, sym2);
console.log(typeof sym); // symbol
console.log(sym.description); // undefined - returns what is passed inside the Symbol() function.
console.log(sym1.description); // foo

// Synmbols are unique
console.log(Symbol('sym') === Symbol('sym')); // false

const user = {
  [Symbol('id')]: 1,
  name: 'John Doe',
  email: 'john@gmail.com',
};

user.id = 2; // We can't change the Symbol(id), rather it would create a new id property and set it to 2.

console.log(user);
console.log(user['name']); // 'John Doe'
// Symbols are NOT enumerable -> i.e. we can't get Symbol value by treating it as a key.
console.log(user[Symbol('id')]); // undefined, as this symbol is different than the one we created.

console.log(Object.keys(user)); // - ['name', 'email', 'id'] This will not give Symbol id

for (let key in user) {
  console.log(key);
}

// Get Own Propoerties Symbols.
console.log(Object.getOwnPropertySymbols(user)); // give all symbols in the object in an array.

// Alternative way to create Symbols.
/* This method takes a string as parameter and checks if a symbol
    with that param already exists, if not it creates a new one or returns
    the existing one.
*/
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym4 === sym3); // true, as it is created using for method.
console.log(Symbol.keyFor(sym3), Symbol.keyFor(sym4)); // returns the key/string passed while creating the symbol.

// Returns the string representation of Symbol.
console.log(sym1.toString());
console.log(sym3.toString());

// Symbol is a constructor function.
console.log(Object.getOwnPropertyNames(Symbol)); // This gives all the properties inside the constructor.

function constFun() {
  this.name = 'Kritika';
  this.age = 23;
}

constFun.prototype.myFun = function () {
  console.log('Having Fun!');
};

const cf = new constFun();
console.log(cf);
console.log(Object.getOwnPropertyNames(cf));
