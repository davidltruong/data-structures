

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var bool = false;
  if (Array.isArray(this._storage.get(index))) {
    this._storage.each(function (value, key, collection) {
      if (bucket[key] !== undefined && k === bucket[key][0]) {
        bool = true;
        bucket[key][1] = v;
      }
    });
    if (!bool) {
      this._storage.get(index).push([k, v]);
    }
  } else {
    var buckets = [];
    buckets.push([k, v]);
    this._storage.set(index, buckets);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      result = bucket[i][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  this._storage.each(function (value, key, collection) {
    if (bucket[key] !== undefined && k === bucket[key][0]) {
      bucket.splice(key, 1);
    }
  });
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


