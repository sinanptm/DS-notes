class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const node = new Node(value)
        if (this.root) return this.#insert(this.root, node)
        else this.root = node
    }
    #insert(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) root.left = newNode
            else this.#insert(root.left, newNode)
        } else {
            if (!root.right) root.right = newNode
            else this.#insert(root.right, newNode)
        }
    }
    search(value, root = this.root) {
        if (!root) return false
        if (root.value === value) return true
        if (value < root.value) {
            this.search(value, root.left)
        } else {
            this.search(value, root.right)
        }
    }
    preOrder(root = this.root) {
        let res = []
        if (!root) return root
        res.push(root.value);
        res.concat(this.preOrder(root.left))
        res.concat(this.preOrder(root.right))
        return res
    }
    inOrder(root = this.root) {
        let res = []
        if (!root) return root
        res.concat(this.inOrder(root.left))
        res.push(root.value)
        res.concat(this.inOrder(root.right))
    }
    postOrder(root = this.root) {
        let res = []
        if (!root) return res
        res.concat(this.postOrder(root.left))
        res.concat(this.postOrder(root.right))
        return res
    }
    leveOrder() {
        let queue = [this.root], res = []
        while (queue.length) {
            let cur = queue.shift()
            res.push(cur.value)
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        return res
    }
    minValue(root = this.root) {
        return root.left ? this.minValue(root.left) : root.value;
    }
    maxValue(root = this.root) {
        return root.right ? this.maxValue(root.right) : root.value
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
    hiehgt(root = this.root) {
        if (!root) return -1
        let left = this.hiehgt(root.left)
        let right = this.hiehgt(root.right)
        return Math.max(left, right) + 1
    }
    depth(value, root = this.root, level = 0) {
        if (!root) return -1;
        if (root.value === value) return level
        const left = this.depth(value, root.left, level + 1)
        const right = this.depth(value, root.right, level + 1)
        if (left !== -1) return left
        if (right !== -1) return right
        return -1
    }

    findClose(root = this.root) {
        let current = root
        let closest = root.value
        while (current) {
            if (Math.abs(current.value - target) < Math.abs(closest - target)) closest = current.value
            current = target < current.value ? current.left : current.right
        }
        return closest
    }

    isBST(root = this.root) {
        return this.isBSTUtil(root, -Infinity, Infinity);
    }
    
    isBSTUtil(node, min, max) {
        if (!node) return true;
    
        if (node.value <= min || node.value >= max) {
            return false;
        }
        return (
            this.isBSTUtil(node.left, min, node.value) &&
            this.isBSTUtil(node.right, node.value, max)
        );
    }
    
}




let tree = new Tree();
tree.insert(50);
tree.insert(20);
tree.insert(23);
tree.insert(87);
tree.insert(72);
tree.insert(10);
tree.insert(35);
tree.insert(23);
tree.insert(678);
// console.log(`inOrder: ${tree.inOrder()}`);
// console.log(`preOrder: ${tree.preOrder()}`);
// console.log(`postOrder: ${tree.postOrder()}`);
// console.log(`levelOrder: ${tree.leveOrder()}`);
console.log(tree.isBST());

