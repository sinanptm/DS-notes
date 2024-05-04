class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) this.root = newNode;
        else this.#insert(newNode, this.root);
    }
    #insert(newNode, node) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else return this.#insert(newNode,node.left);
        } else {
            if (!node.right) node.right = newNode;
            else return this.#insert(newNode,node.right);
        }
    }
    search(value, node = this.root) {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) return this.search(node.left);
        else return this.search(node.right);
    }
    preOrder(node = this.root) {
        let res = [];
        if (node) {
            res.push(node.value);
            res = res.concat(this.preOrder(node.left));
            res = res.concat(this.preOrder(node.right));
        }
        return res
    }
    inOrder(node = this.root) {
        let res = [];
        if (node) {
            res = res.concat(this.inOrder(node.left))
            res.push(node.value)
            res = res.concat(this.inOrder(node.right))
        }
        return res
    }
    postOrder(node = this.root) {
        let res = []
        if (node) {
            res = res.concat(this.postOrder(node.left))
            res = res.concat(this.postOrder(node.right))
            res.push(node.value)
        }
        return res
    }
    levelOrder(node = this.root) {
        let queue = [node]
        let res = []
        while (queue.length) {
            let cur = queue.shift()
            res.push(cur.value)
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        return res
    }
    delete(value) {
        this.root = this.#delete(value, this.root)
    }
    #delete(value, node) {
        if (!node) return node
        if (value < node.value) return this.#delete(value, node.left)
        else if (value > node.value) return this.#delete(value, node.right)
        else {
            if (!node.left) return node.right
            if (!node.right) return node.left
            node.value = this.minValue(node.right)
            node.right = this.#delete(value, node.right)
        }
        return node
    }
    minValue(node = this.root) {
        return node.left ? node.left.value : this.minValue(node.left)
    }
    maxValue(node = this.root) {
        return node.right ? node.right.value : this.maxValue(node.right)
    }
    hieght(node = this.root) {
        if (!node) return -1
        let left = this.hieght(node.left)
        let right = this.hieght(node.right)
        return Math.max(left, right)
    }
    depth(value, node = this.root, level = 0) {
        if (!node) return -1
        if (node.value === value) return level
        const left = this.depth(value, node.left, level + 1)
        const right = this.depth(value, node.right, level + 1)
        if (left !== -1) return left
        if (right !== -1) return right
        return -1
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

let tree = new BinaryTree();
tree.insert(50);
tree.insert(20);
tree.insert(23);
tree.insert(87);
tree.insert(72);
tree.insert(10);
tree.insert(35);
tree.insert(23);
tree.insert(678);
console.log(`inOrder: ${tree.inOrder()}`);
console.log(`preOrder: ${tree.preOrder()}`);
console.log(`postOrder: ${tree.postOrder()}`);
console.log(`levelOrder: ${tree.levelOrder()}`);
console.log(tree.hieght());
console.log(tree.findClosestValue(22));
