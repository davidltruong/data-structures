var Queue = function() {
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function (value) {
  var size = Object.keys(this.storage).length;
  this.storage[size] = value;
};

Queue.prototype.dequeue = function () {
  var size = Object.keys(this.storage).length;
  var deleted = this.storage[0];
  for (var i = 0; i < size - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[size - 1];
  return deleted;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};