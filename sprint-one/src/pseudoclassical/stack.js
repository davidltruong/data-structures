var Stack = function() {
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (value) {
  var size = Object.keys(this.storage).length;
  this.storage[size] = value;
};

Stack.prototype.pop = function () {
  var size = Object.keys(this.storage).length;
  var deleted = this.storage[size - 1];
  delete this.storage[size - 1];
  return deleted;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

var NewStack = new Stack;
