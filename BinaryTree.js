class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) this.root = newNode;
        else this.#insert(newNode, this.root);
    }

    #insert(newNode, node) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else return this.#insert(newNode, node.left);
        } else {
            if (!node.right) node.right = newNode;
            else return this.#insert(newNode, node.right);
        }
    }

    search(value, node = this.root) {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) return this.search(value, node.left);
        else return this.search(value, node.right);
    }

    preOrder(node = this.root) {
        let res = [];
        if (node) {
            res.push(node.value);
            res = res.concat(this.preOrder(node.left));
            res = res.concat(this.preOrder(node.right));
        }
        return res;
    }

    inOrder(node = this.root) {
        let res = [];
        if (node) {
            res = res.concat(this.inOrder(node.left));
            res.push(node.value);
            res = res.concat(this.inOrder(node.right));
        }
        return res;
    }

    postOrder(node = this.root) {
        let res = [];
        if (node) {
            res = res.concat(this.postOrder(node.left));
            res = res.concat(this.postOrder(node.right));
            res.push(node.value);
        }
        return res;
    }

    levelOrder(node = this.root) {
        let queue = [node];
        let res = [];
        while (queue.length) {
            let cur = queue.shift();
            res.push(cur.value);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        return res;
    }

    delete(value) {
        this.root = this.#delete(this.root, value);
    }

    #delete(root, value) {
        if (!root) return null;
        if (value < root.value) root.left = this.#delete(root.left, value);
        else if (value > root.value) {
            root.right = this.#delete(root.right, value);
        } else {
            if (!root.left) return root.right;
            if (!root.right) return root.left;
            root.value = this.minValue(root.right);
            root.right = this.#delete(root.right, root.value);
        }
        return root;
    }

    minValue(root = this.root) {
        let val = root.value;
        while (root.left) {
            val = root.value;
            root = root.left;
        }
        return val;
    }

    maxValue(root = this.root) {
        let val = root.value;
        while (root.right) {
            val = root.value;
            root = root.right;
        }
        return val;
    }

    height(node = this.root) {
        if (!node) return -1;
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(value, node = this.root, level = 0) {
        if (!node) return -1;
        if (node.value === value) return level;
        const left = this.depth(value, node.left, level + 1);
        const right = this.depth(value, node.right, level + 1);
        if (left !== -1) return left;
        if (right !== -1) return right;
        return -1;
    }

    findClosestValue(value) {
        let cur = this.root;
        let closest = this.root.value;
        while (cur) {
            if (Math.abs(cur.value - value) < Math.abs(closest - value)) {
                closest = cur.value;
            }
            cur = value < cur.value ? cur.left : cur.right;
        }
        return closest;
    }

    countNodes(node = this.root) {
        if (!node) return 0;
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    isBalanced(node = this.root) {
        if (!node) return true;
        const heightDiff = Math.abs(this.height(node.left) - this.height(node.right));
        if (heightDiff > 1) return false;
        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    findCommonAncestor(value1, value2, node = this.root) {
        if (!node) return null;
        if (node.value === value1 || node.value === value2) return node;
        const left = this.findCommonAncestor(value1, value2, node.left);
        const right = this.findCommonAncestor(value1, value2, node.right);
        if (left && right) return node;
        return left ? left : right;
    }

    mirror(node = this.root) {
        if (!node) return null;
        let left = this.mirror(node.left);
        let right = this.mirror(node.right);
        node.left = right;
        node.right = left;
        return node;
    }

    sumOfNodes(node = this.root) {
        if (!node) return 0;
        return node.value + this.sumOfNodes(node.left) + this.sumOfNodes(node.right);
    }

    areIdentical(root1, root2) {
        if (!root1 && !root2) return true;
        if (root1 && root2) {
            return root1.value === root2.value &&
                this.areIdentical(root1.left, root2.left) &&
                this.areIdentical(root1.right, root2.right);
        }
        return false;
    }
}

function isValidBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!root) {
        return true;
    }
    if (root.value <= min || root.value >= max) {
        return false;
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}

// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(22);
tree.insert(1);
tree.insert(14);

console.log("In-Order Traversal:", tree.inOrder()); // Output: [1, 2, 5, 5, 10, 13, 14, 15, 22]
console.log("Tree Height:", tree.height()); // Output: 3
console.log("Is Balanced:", tree.isBalanced()); // Output: true
console.log("Sum of Nodes:", tree.sumOfNodes()); // Output: 87
console.log("Count of Nodes:", tree.countNodes()); // Output: 9
console.log("Find Closest Value to 12:", tree.findClosestValue(12)); // Output: 13
console.log("Level-Order Traversal:", tree.levelOrder()); // Output: [10, 5, 15, 2, 5, 13, 22, 1, 14]
console.log("Common Ancestor of 14 and 22:", tree.findCommonAncestor(14, 22).value); // Output: 15
console.log("Mirror Tree In-Order:", tree.inOrder(tree.mirror())); // Output: [22, 15, 14, 13, 10, 5, 5, 2, 1]
