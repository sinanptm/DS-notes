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


  search(value,node = this.root) {
      if (!node) return false;
      if (node.value === value) return true;
      if (value < node.value) {
          return this.search(node.left, value);
      } else {
          return this.search(node.right, value);
      }
  }



  delete( value, node=this.root ) {
    // Base case: If the current node is null, return null
    if (!node) return null;
    
    // If the value to delete is equal to the current node's value
    if (value === node.value) {
        // If the current node has no children
        if (!node.left && !node.right) {
            // Return null to indicate that this node should be removed from the tree
            return null;
        } 
        // If the current node has only a right child
        else if (!node.left) {
            // Return the right child node to replace the current node in the tree
            return node.right;
        } 
        // If the current node has only a left child
        else if (!node.right) {
            // Return the left child node to replace the current node in the tree
            return node.left;
        } 
        // If the current node has both left and right children
        else {
            // Find the minimum value node in the right subtree
            const minValue = this._findMinValue(node.right);
            // Replace the current node's value with the minimum value
            node.value = minValue;
            // Delete the minimum value node from the right subtree recursively
            node.right = this.delete(node.right, minValue);
            // Return the updated current node
            return node;
        }
    } 
    // If the value to delete is less than the current node's value
    else if (value < node.value) {
        // Recursively delete the value from the left subtree
        node.left = this.delete(node.left, value);
        // Return the updated current node
        return node;
    } 
    // If the value to delete is greater than the current node's value
    else {
        // Recursively delete the value from the right subtree
        node.right = this.delete(node.right, value);
        // Return the updated current node
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

// console.log("Inorder Traversal:");
// tree.inorder();

// console.log("\nPreorder Traversal:");
// tree.preorder();

// console.log("\nPostorder Traversal:");
// tree.postorder();

// console.log("\nLevel Order Traversal:");
// tree.levelOrder();

// console.log("\nHeight of the Tree:", tree.height());

// console.log("\nTotal Number of Nodes:", tree.countNodes());

// console.log("\nMinimum Value in the Tree:", tree.findMinValue());

// console.log("\nMaximum Value in the Tree:", tree.findMaxValue());

// console.log("\nIs the Tree Balanced?", tree.isBalanced());

// console.log("\nLowest Common Ancestor of 3 and 7:", tree.lowestCommonAncestor(3, 7).value);

// tree.delete(5);
// console.log("\nInorder Traversal after deleting 5:");
// tree.inorder();
