var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var size = Object.keys(storage).length;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    if (Object.keys(storage).length === 0) {
      return 0;
    } else {
      var size = Object.keys(storage).length;
      var shifted = storage[0];
      for (var i = 0; i < size - 1; i++) {
        storage[i] = storage[i + 1];
      }
      delete storage[size - 1];
      return shifted;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
