class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var size = Object.keys(this.storage).length;
    this.storage[size] = value;
  }

  pop() {
    var size = Object.keys(this.storage).length;
    var deleted = this.storage[size - 1];
    delete this.storage[size - 1];
    return deleted;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}