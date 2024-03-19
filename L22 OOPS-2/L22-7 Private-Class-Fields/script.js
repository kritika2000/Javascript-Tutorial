class Wallet {
  //   constructor() {
  //     this._balance = 0;
  //     this._transactions = [];
  //   }
  #balance = 0;
  #transactions = [];
  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not Enough Funds!');
      return;
    }
    this.#processWithdraw(amount);
    this.#balance -= amount;
  }
  #processDeposit(amount) {
    this.#transactions.push(`Deposit ${amount}`);
  }
  #processWithdraw(amount) {
    this.#transactions.push(`Withdraw ${amount}`);
  }
  get balance() {
    return this.#balance;
  }
  get transactions() {
    return this.#transactions;
  }
}

// With _ convention, we're still at a risk of exposing, the field which we have made private.

// In ES2022, we can use class fields, to actually not let the user access the private property outside of the class.
const wallet = new Wallet();
// console.log(wallet.#balance); // error.
wallet.deposit(1000);
wallet.withdraw(250);
console.log(wallet.balance, wallet.transactions);
