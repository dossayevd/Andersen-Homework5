class Stack {
  count = 0;
  size = 0;
  items = [];

  constructor(size = 10) {
    if (Number.isInteger(size) === false || size < 0)
      throw Stack.error('Incorrect size');
    this.size = parseInt(size, 10);
  }

  static error(message) {
    return 'Stack error: ' + message;
  }

  push(value) {
    if (this.count === this.size) {
      throw Stack.error('overflow');

      return;
    }
    this.items[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      throw Stack.error('nothing to pop');
      
      return;
    }
    let value = this.peek();
    this.count--;
    delete this.items[this.count];
    
    return value;
  }

  peek() {
    if (this.count === 0) return null;
    
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  toArray() {
    return new Array(this.items);
  }

  static fromIterable(iterable) {
    if (iterable === null || iterable === undefined)
      
      throw Stack.error('object is not iterable');
    
    if (typeof iterable[Symbol.iterator] !== 'function')
      throw Stack.error('object is not iterable');
    
    let n = 0;
    for (let obj of iterable) n++;
    let stack = new Stack(n);
    for (let obj of iterable) stack.push(obj);
    
    return stack;
  }
}

module.exports = { Stack };
