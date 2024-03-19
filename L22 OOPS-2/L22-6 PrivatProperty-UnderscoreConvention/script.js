/**
 * In JS, we have a convention, which indicate that a property
 * is a private property.
 */

/** By doing thing this way we're exposing the
 * balance property to the outside world. 
class Wallet {
  constructor() {
    this.balance = 0;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}
*/
class Wallet {
  // now the balance property will not be accessible outside.
  constructor() {
    this._balance = 0; // though we can still access wallet._balance outside the scope of this class.
    this._transaction = [];
  }
  deposit(amount) {
    this._balance += amount;
    this._transaction.push(`Deposit Rs ${amount}`);
  }
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not Enough Funds!');
      return;
    }
    this._balance -= amount;
    this._transaction.push(`Withdraw Rs ${amount}`);
  }
  get balance() {
    return this._balance;
  }
  get transactions() {
    return this._transaction;
  }
}

const wallet = new Wallet();
wallet.deposit(1000);
console.log(wallet);
wallet.withdraw(250);
console.log(wallet);
console.log(wallet.balance);
wallet.withdraw(5000);
console.log(wallet.transactions);
