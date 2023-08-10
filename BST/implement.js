//binary tree means its node can only point 2 two nodes
//full treee =  every node points to 2 or nodes ( no 1 node point)
//ie one parent will have 0 or 2 children
//nodes that dont have children = leaf
///////BINARY SEARCH TREE
// if new node is less it goes to left if bigger it goes to right
/// roughly O(log N) devide n conquer
//better for removing and lookup than linked list
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor(value) {
    // const newNode = new Node(value);
    // // if we have nothing pointing to this node it will be garbage collected
    // this.root = newNode;
    this.root = null; // bad me push krte rhenge
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.right) {
        temp = temp.right;
      } else return true;
    }
    return false;
  }
  minVal(currentNode) {
    this.root = currentNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}
