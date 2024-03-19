/**
 * Stack is a LIFO - Last In First Out
 * But stacks are not built in JS.
 */

class Queue {
  #arr = [];
  push(item) {
    this.#arr.push(item);
  }
  pop() {
    if (!this.isEmpty()) {
      const front = this.front();
      this.#arr.shift();
      return top;
    } else {
      return 'Queue is Empty';
    }
  }
  front() {
    return !this.isEmpty() ? this.#arr[0] : 'Queue is Empty';
  }
  length() {
    return this.#arr.length;
  }
  isEmpty() {
    return !this.#arr.length;
  }
  clear() {
    this.#arr = [];
  }
}

const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.pop();
q.pop();
console.log(q.front());
console.log(q.length());
