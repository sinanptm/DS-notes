class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinaryTree {
  constructor() {
      this.root = null;
  }

  // Insert a value into the binary tree
  insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
          this.root = newNode;
      } else {
          this._insertNode(this.root, newNode);
      }
  }

  _insertNode(node, newNode) {
      if (newNode.value < node.value) {
          if (!node.left) {
              node.left = newNode;
          } else {
              this._insertNode(node.left, newNode);
          }
      } else {
          if (!node.right) {
              node.right = newNode;
          } else {
              this._insertNode(node.right, newNode);
          }
      }
  }

  // Search for a value in the binary tree
  search(value) {
      return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
      if (!node) return false;
      if (node.value === value) return true;
      if (value < node.value) {
          return this._searchNode(node.left, value);
      } else {
          return this._searchNode(node.right, value);
      }
  }

  // Delete a node with a specific value from the binary tree
  delete(value) {
      this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
      if (!node) return null;
      if (value === node.value) {
          if (!node.left && !node.right) {
              return null;
          } else if (!node.left) {
              return node.right;
          } else if (!node.right) {
              return node.left;
          } else {
              const minValue = this._findMinValue(node.right);
              node.value = minValue;
              node.right = this._deleteNode(node.right, minValue);
              return node;
          }
      } else if (value < node.value) {
          node.left = this._deleteNode(node.left, value);
          return node;
      } else {
          node.right = this._deleteNode(node.right, value);
          return node;
      }
  }

  _findMinValue(node) {
      while (node.left) {
          node = node.left;
      }
      return node.value;
  }

  // Inorder Traversal
  inorder() {
      this._inorderTraversal(this.root);
  }

  _inorderTraversal(node) {
      if (!node) return;
      this._inorderTraversal(node.left);
      console.log(node.value);
      this._inorderTraversal(node.right);
  }

  // Preorder Traversal
  preorder() {
      this._preorderTraversal(this.root);
  }

  _preorderTraversal(node) {
      if (!node) return;
      console.log(node.value);
      this._preorderTraversal(node.left);
      this._preorderTraversal(node.right);
  }

  // Postorder Traversal
  postorder() {
      this._postorderTraversal(this.root);
  }

  _postorderTraversal(node) {
      if (!node) return;
      this._postorderTraversal(node.left);
      this._postorderTraversal(node.right);
      console.log(node.value);
  }

  // Level Order Traversal (Breadth-First Traversal)
  levelOrder() {
      if (!this.root) return;
      const queue = [this.root];
      while (queue.length > 0) {
          const node = queue.shift();
          console.log(node.value);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
  }

  // Calculate the height of the binary tree
  height() {
      return this._calculateHeight(this.root);
  }

  _calculateHeight(node) {
      if (!node) return -1;
      const leftHeight = this._calculateHeight(node.left);
      const rightHeight = this._calculateHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
  }

  // Count the total number of nodes in the binary tree
  countNodes() {
      return this._countNodes(this.root);
  }

  _countNodes(node) {
      if (!node) return 0;
      return 1 + this._countNodes(node.left) + this._countNodes(node.right);
  }

  // Find the minimum value in the binary tree
  findMinValue() {
      if (!this.root) return null;
      let node = this.root;
      while (node.left) {
          node = node.left;
      }
      return node.value;
  }

  // Find the maximum value in the binary tree
  findMaxValue() {
      if (!this.root) return null;
      let node = this.root;
      while (node.right) {
          node = node.right;
      }
      return node.value;
  }

  // Check whether the binary tree is balanced
  isBalanced() {
      return this._isBalanced(this.root) !== -1;
  }

  _isBalanced(node) {
      if (!node) return 0;
      const leftHeight = this._isBalanced(node.left);
      if (leftHeight === -1) return -1;
      const rightHeight = this._isBalanced(node.right);
      if (rightHeight === -1) return -1;
      if (Math.abs(leftHeight - rightHeight) > 1) return -1;
      return Math.max(leftHeight, rightHeight) + 1;
  }

  // Find the lowest common ancestor (LCA) of two nodes
  lowestCommonAncestor(node1, node2) {
      return this._lowestCommonAncestor(this.root, node1, node2);
  }

  _lowestCommonAncestor(node, node1, node2) {
      if (!node) return null;
      if (node.value === node1 || node.value === node2) return node;
      const left = this._lowestCommonAncestor(node.left, node1, node2);
      const right = this._lowestCommonAncestor(node.right, node1, node2);
      if (left && right) return node;
      return left ? left : right;
  }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Inorder Traversal:");
tree.inorder();

console.log("\nPreorder Traversal:");
tree.preorder();

console.log("\nPostorder Traversal:");
tree.postorder();

console.log("\nLevel Order Traversal:");
tree.levelOrder();

console.log("\nHeight of the Tree:", tree.height());

console.log("\nTotal Number of Nodes:", tree.countNodes());

console.log("\nMinimum Value in the Tree:", tree.findMinValue());

console.log("\nMaximum Value in the Tree:", tree.findMaxValue());

console.log("\nIs the Tree Balanced?", tree.isBalanced());

console.log("\nLowest Common Ancestor of 3 and 7:", tree.lowestCommonAncestor(3, 7).value);

tree.delete(5);
console.log("\nInorder Traversal after deleting 5:");
tree.inorder();
