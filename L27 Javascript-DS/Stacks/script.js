/**
 * Stack is a LIFO - Last In First Out
 * But stacks are not built in JS.
 */

class Stack {
  #arr = [];
  #nextIndex = -1;
  constructor() {}
  push(item) {
    this.#nextIndex++;
    this.#arr.push(item);
  }
  pop() {
    if (!this.isEmpty()) {
      const top = this.top();
      this.#arr.pop();
      this.#nextIndex--;
      return top;
    } else {
      return 'Stack is Empty';
    }
  }
  top() {
    return !this.isEmpty() ? this.#arr[this.#nextIndex] : 'Stack is Empty';
  }
  length() {
    return this.#arr.length;
  }
  isEmpty() {
    return this.#nextIndex === -1;
  }
  clear() {
    this.#arr = [];
    this.#nextIndex = -1;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.push(4);
stack.pop();
stack.pop();
console.log(stack.top());
