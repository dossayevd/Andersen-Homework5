class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) throw new Error('Error');

    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) return null;

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Error');
    } else {
      const stack = new Stack();
      for (let item of iterable) {
        stack.push(item);
      }
      return stack;
    }
  }
}

let myStack = new Stack();

module.exports = { Stack };
