var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if (!this._storage.includes(item)) {
  //   this._storage.push(item);
  // }
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // if (this._storage.includes(item)) {
  //   return true;
  // } else {
  //   return false;
  // }
  if (this._storage[item]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  // for (var i = 0; i < this._storage.length; i++) {
  //   if (this._storage[i] === item) {
  //     this._storage.splice(i, 1);
  //   }
  // }
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
