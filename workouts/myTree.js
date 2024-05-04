class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new TreeNode(value)
        if (!this.root) this.root = newNode
        else this.#insert(this.root, newNode)
    }
    #insert(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else return this.#insert( node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else return this.#insert(node.right,newNode);
        }
    }
    search(value, root = this.root) {
        if (!root) return false
        if (root.value === value) return true
        if (value < root.value) return this.search(value,root.left)
        else return this.search(value,root.right)
    }
    hieght(root = this.root) {
        if (!root) return -1;
        let left = this.hieght(root.left)
        let right = this.hieght(root.right)
        return Math.max(left, right)
    }
    delete(value) {
        this.root = this.#delete(value, this.root)
    }
    #delete(value, root) {
        if (!root) return root
        if (value < root.value) root.left = this.#delete(value,root.left)
        else if (value > root.value) root.right = this.#delete(value,root.right)
        else {
            if (!root.left) return root.right
            if (!root.right) return root.left
            root.value = this.minValue(root.right)
            root.right = this.#delete(root.value, root.right)
        }
    }
    depth(value, root = this.root, level = 0) {
        if (!root) return -1
        if (root.value == value) return level
        let left = this.depth(value, root.left, level + 1)
        let right = this.depth(value, root.right, level + 1)
        if (left !== -1) return left
        if (right !== -1) return right
        return -1
    }
    minValue(node = this.root) {
        let cur = node
        while (cur.left) {
            cur = cur.left;
        }
        return cur.value;
    }
    maxValue(node = this.root) {
        if (!node) return null;
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }
    preOrder(root = this.root) {
        let res = [];
        if (root) {
            res.push(root.value);
            res = res.concat(this.preOrder(root.left)); // Concatenate result of recursive call
            res = res.concat(this.preOrder(root.right)); // Concatenate result of recursive call
        }
        return res;
    }
    
    inOrder(root = this.root) {
        let res = [];
        if (root) {
            res = res.concat(this.inOrder(root.left)); // Concatenate result of recursive call
            res.push(root.value);
            res = res.concat(this.inOrder(root.right)); // Concatenate result of recursive call
        }
        return res;
    }
    
    postOrder(root = this.root) {
        let res = [];
        if (root) {
            res = res.concat(this.postOrder(root.left)); // Concatenate result of recursive call
            res = res.concat(this.postOrder(root.right)); // Concatenate result of recursive call
            res.push(root.value);
        }
        return res;
    }
    
    levelOrder(root = this.root) {
        let queue = [root]
        let res = []
        while (queue.length) {
            let cur = queue.shift()
            res.push(cur.value)
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        return res
    }
    findClosestValue(value) {
        let cur = this.root
        let closest = this.root.value
        while (cur) {
            if (Math.abs(cur.value - value) < Math.abs(closest - value)) closest = cur.value
            cur = value < cur.value ? cur.left : cur.right
        }
        return closest
    }

}

const isValidBST = (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
    if (!root) return true
    if (root.value <= min || root.value >= max) {
        return false
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max) 
}




const bst = new BinarySearchTree()
bst.insert(12)
bst.insert(535)
bst.insert(45)
bst.insert(342)
bst.insert(3452)
bst.insert(1)
bst.insert(22)
bst.insert(111)
bst.insert(62)
bst.insert(17)
bst.insert(175)
bst.insert(72)
console.log(bst.inOrder());
bst.delete(72)
console.log(bst.inOrder());