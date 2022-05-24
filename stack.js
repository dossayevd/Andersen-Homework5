class StackItem {
  value;
  prev;
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
  }
}

class Stack {
  count = 0;
  size = 0;
  topItem = null;

  constructor(size = 10) {
    if (Number.isInteger(size) === false || size < 0)
      throw Stack.error('Incorrect size!');

    this.size = parseInt(size, 10);
  }

  static error(message) {
    return 'Stack error: ' + message;
  }

  push(value) {
    if (this.count === this.size) {
      throw Stack.error('overflow!');
      
      return;
    }
    this.topItem = new StackItem(value, this.topItem);
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      throw Stack.error('nothing to pop!');
      
      return;
    }

    let value = this.topItem.value;
    let del = this.topItem;
    this.topItem = this.topItem.prev;
    this.count--;
    del = null;

    return value;
  }

  peek() {
    if (this.count === 0) return null;

    return this.topItem.value;
  }

  isEmpty() {
    return this.count === 0;
  }

  toArray() {
    let currItem = this.topItem;
    let arr = new Array();
    let i = 0;

    while (currItem != null) {
      arr[i++] = currItem.value;
      currItem = currItem.prev;
    }

    return arr;
  }

  static fromIterable(iterable) {
    if (iterable === null || iterable === undefined)
      throw Stack.error('object not iterable!');

    if (typeof iterable[Symbol.iterator] !== 'function')
      throw Stack.error('object not iterable!');

    let n = 0;

    for (let obj of iterable) n++;
    let stack = new Stack(n);

    for (let obj of iterable) stack.push(obj);
    
    return stack;
  }
}


module.exports = { Stack };
