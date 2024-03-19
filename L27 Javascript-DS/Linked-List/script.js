class Node {
  #val;
  #next;
  constructor(value) {
    this.#val = value;
    this.#next = null;
  }
  set next(nextNode) {
    this.#next = nextNode;
  }
  get next() {
    return this.#next;
  }
  get val() {
    return this.#val;
  }
}

class LinkedList {
  #head;
  #tail;
  #len;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#len = 0;
  }
  insertFirst(val) {
    const node = new Node(val);
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
      this.#len++;
      return;
    }
    node.next = this.#head;
    this.#head = node;
    this.#len++;
  }
  insertLast(val) {
    const node = new Node(val);
    if (this.#head) {
      this.#tail.next = node;
    } else {
      this.#head = node;
    }
    this.#tail = node;
    this.#len++;
  }
  insertAt(val, index) {
    if (index > this.#len) {
      return `Can't Insert at index ${index}`;
    }
    if (!this.#head || index === 0) {
      this.insertFirst(val);
      return;
    }
    if (this.#len === index) {
      this.insertLast(val);
      return;
    }
    const node = new Node(val);
    this.#len++;
    let ind = 1;
    let temp = this.#head;
    while (ind < index && temp) {
      temp = temp.next;
      ind++;
    }
    const x = temp.next;
    temp.next = node;
    node.next = x;
  }
  getAt(index) {
    if (index > this.#len) {
      return `Index out of bounds`;
    }
    let temp = this.#head;
    let ind = 0;
    while (ind < index && temp) {
      temp = temp.next;
      ind++;
    }
    return temp;
  }
  removeAt(index) {
    if (index > this.#len) {
      return `Index out of bounds`;
    }
    this.#len--;
    if (index === 0) {
      this.#head = this.#head.next;
      return this.#head;
    }
    let temp = this.#head;
    let ind = 1;
    while (ind < index) {
      temp = temp.next;
      ind++;
    }
    temp.next = temp.next.next;
    return this.#head;
  }
  printListData() {
    if (!this.#head) {
      console.log('List is Empty');
      return;
    }
    let temp = this.#head;
    let ind = 0;
    while (temp) {
      console.log(`Item ${ind + 1}: ${temp.val}`);
      temp = temp.next;
      ind++;
    }
  }
  clearList() {
    this.#head = null;
    this.#tail = null;
  }
}

const ll = new LinkedList();
ll.insertFirst(10);
ll.insertFirst(12);
ll.insertLast(13);
ll.insertAt(14, 1);
ll.insertLast(15);
ll.insertAt(16, 2);
console.log(ll.getAt(0).val);
console.log(ll.removeAt(2));
ll.printListData();
