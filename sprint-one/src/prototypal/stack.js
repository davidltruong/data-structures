var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value) {
    var size = Object.keys(this.storage).length;
    this.storage[size] = value;
  },

  pop: function() {
    var size = Object.keys(this.storage).length;
    var deleted = this.storage[size - 1];
    delete this.storage[size - 1];
    return deleted;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


