class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class ShinglyLinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newLast = current;
    while (current.next) {
      newLast = current;
      current = current.next;
    }
    this.last = newLast;
    this.last = next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

list = new ShinglyLinkedList();
console.log(list.push(3));
console.log(list.push(4));
