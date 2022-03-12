

// Instantiate a new graph
var Graph = function() {
  this._nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this._nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this._nodes.length; i++) {
    if (node === this._nodes[i].value) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this._nodes.length; i++) {
    if (node === this._nodes[i].value) {
      for (var j = 0; j < this._nodes[i].edges.length; j++) {
        this.removeEdge(node, this._nodes[i].edges[j]);
      }
      this._nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this._nodes.length; i++) {
    if (fromNode === this._nodes[i].value && this._nodes[i].edges.includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this._nodes.length; i++) {
    if (fromNode === this._nodes[i].value) {
      this._nodes[i].edges.push(toNode);
    }
  }
  for (var j = 0; j < this._nodes.length; j++) {
    if (toNode === this._nodes[j].value) {
      this._nodes[j].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this._nodes.length; i++) {
    if (fromNode === this._nodes[i].value) {
      var edgeNodeIndex = this._nodes[i].edges.indexOf(toNode);
      this._nodes[i].edges.splice(edgeNodeIndex, 1);
    }
  }
  for (var j = 0; j < this._nodes.length; j++) {
    if (toNode === this._nodes[j].value) {
      var edgeNodeIndex = this._nodes[j].edges.indexOf(fromNode);
      this._nodes[j].edges.splice(edgeNodeIndex, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this._nodes.length; i++) {
    cb(this._nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


