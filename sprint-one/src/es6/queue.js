class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var size = Object.keys(this.storage).length;
    this.storage[size] = value;
  }

  dequeue() {
    var size = Object.keys(this.storage).length;
    var deleted = this.storage[0];
    for (var i = 0; i < size - 1; i ++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[size - 1];
    return deleted;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
