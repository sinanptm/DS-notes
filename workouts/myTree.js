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
        const node = new TreeNode(value)
        if (!this.root) this.root = node
        else return this.#insert(node)
    }
    #insert(newNode, root = this.root) {
        if (newNode.value < root.value) {
            if (!root.left) root.left = newNode
            else this.#insert(newNode, root.left)
        } else {
            if (!root.right) root.right = newNode
            else this.#insert(newNode, root.right)
        }
    }
    search(value, root = this.root) {
        if (!root) return false
        if (root.value == value) return true
        if (value < root.value) return this.search(value, root.left)
        else return this.search(value, root.right)
    }
    preOrder(root = this.root) {
        let res = []
        if (root) {
            res.push(root.value);
            res = res.concat(this.preOrder(root.left))
            res = res.concat(this.preOrder(root.right))
        }
        return res
    }
    inOrder(root = this.root) {
        let res = []
        if (root) {
            res = res.concat(this.inOrder(root.left))
            res.push(root.value)
            res = res.concat(this.inOrder(root.right))
        }
        return res
    }
    postOrder(root = this.root) {
        let res = []
        if (root) {
            res = res.concat(this.postOrder(root.left))
            res = res.concat(this.postOrder(root.right))
            res = res.push(root.value)
        }
        return res
    }
    levelOrder(root = this.root) {
        let res = []
        let queue = [root]
        while (queue.length) {
            let cur = queue.shift()
            res.push(cur.value)
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        return res
    }
    delete(value) {
        this.root = this.#delete(value)
    }
    #delete(value, root = this.root) {
        if (!root) return null;
        if (value < root.value) {
            root.left= this.#delete(value, root.left)
        } else if (value > root.value) {
            root.right = this.#delete(value, root.right)
        } else {
            if (!root.left) return root.right
            if (!root.right) return root.left
            root.value = this.minValue(root.right)
            root.right = this.#delete(root.value, root.right)
        }
        return root
    }
    
    minValue(root = this.root) {
        while (root.left) {
            root = root.left
        }
        return root.value
    }    
    maxValue(root = this.root) {
        while (root.right) {
            root = root.right
        }
        return root.value
    }
    height(root = this.root) {
        if (!root) return -1
        let leftHeight = this.height(root.left)
        let rightHeight = this.height(root.right)
        return Math.max(leftHeight, rightHeight) + 1
    }
    depth(value, root = this.root, level = 0) {
        if (!root) return -1
        if (root.value === value) return level
        let left = this.depth(value, root.left, level + 1)
        let right = this.depth(value, root.right, level + 1)
        if (left !== -1) return level
        if (right !== -1) return level
        return -1
    }
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
bst.delete(72)
console.log(`inOrder: ${bst.inOrder()}`);
console.log(`preOrder: ${bst.preOrder()}`);
console.log(`postOrder: ${bst.postOrder()}`);
console.log(`levelOrder: ${bst.levelOrder()}`);
bst.delete(678)
console.log(`levelOrder: ${bst.levelOrder()}`);
console.log('\n');
console.log(`: ${JSON.stringify(bst)}`);