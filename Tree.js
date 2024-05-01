class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class ATree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) this.root = node;
        else this.#insert(node, this.root);
    }

    #insert(newNode, root) {
        if (newNode.value < root.value) {
            if (root.left === null) root.left = newNode;
            else this.#insert(newNode, root.left);
        } else {
            if (root.right === null) root.right = newNode;
            else this.#insert(newNode, root.right);
        }
    }

    search(value, root = this.root) {
        if (!root) return false;
        if (root.value === value) return true;
        if (value < root.value) return this.search(value, root.left);
        if (value > root.value) return this.search(value, root.right);
    }

    preOrder(root = this.root) {
        let res = [];
        if (root) {
            res.push(root.value);
            res = res.concat(this.preOrder(root.left));
            res = res.concat(this.preOrder(root.right));
        }
        return res;
    }

    inOrder(root = this.root) {
        let res = [];
        if (root) {
            res = res.concat(this.inOrder(root.left));
            res.push(root.value);
            res = res.concat(this.inOrder(root.right));
        }
        return res;
    }

    postOrder(root = this.root) {
        let res = [];
        if (root) {
            res = res.concat(this.postOrder(root.left));
            res = res.concat(this.postOrder(root.right));
            res.push(root.value);
        }
        return res;
    }

    levelOrder() {
        let res = [];
        if (!this.root) return res;
        const queue = [this.root];
        while (queue.length) {
            let current = queue.shift();
            res.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return res;
    }

    minValue(root = this.root) {
        return root.left ? this.minValue(root.left) : root.value;
    }

    maxValue(root = this.root) {
        return root.right ? this.maxValue(root.right) : root.value;
    }

    delete(value) {
        this.root = this.#delete(this.root, value);
    }

    #delete(root, value) {
        if (root === null) return root;
        if (value < root.value) {
            root.left = this.#delete(root.left, value);
        } else if (value > root.value) {
            root.right = this.#delete(root.right, value);
        } else {
            if (!root.left) return root.right;
            else if (!root.right) return root.left;

            root.value = this.minValue(root.right);
            root.right = this.#delete(root.right, root.value);
        }
        return root;
    }

    hieght(root = this.root){
        if(!root) return -1
        const left = this.hieght(root.left)
        const right = this.hieght(root.right)
        return Math.max(left,right)+1
    }


  

    depth(value,root=this.root,level = 0){
        if(!root) return -1;
        if(root.value===value)return level
        const leftDepth = this.depth(value,root.left,level+1);
        const rightDepth = this.depth(value,root.right,level+1);
        if(leftDepth!==-1) return leftDepth;
        if(rightDepth!==-1)return rightDepth
        return -1;
    }
    findClosestValue(target) {
        if (!this.root) return null; // Tree is empty
        let closest = this.root.value;
        let current = this.root;
        while (current !== null) {
            if (Math.abs(current.value - target) < Math.abs(closest - target)) {
                closest = current.value;
            }
            if (target < current.value) {
                current = current.left;
            } else if (target > current.value) {
                current = current.right;
            } else {
                break; 
            }
        }
        return closest;
    }
}

let tree = new ATree();
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