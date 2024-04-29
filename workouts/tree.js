class TreeNode {
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
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else this._insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this._insertNode(node.right, newNode);

        }
    }

    search(value, node = this.root) {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) {
            return this.search(node.left, value);
        } else {
            return this.search(node.right, value);
        }
    }

    // ! DFS

    preOrder(node = this.root) {
        if (node) {
            console.log('pre', node.value);
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left)
            console.log('ino', node.value);
            this.inOrder(node.right)
        }
    }
    postOrder(node = this.root) {
        if (node) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log('post', node.value);
        }
    }

    // ! BFS
    levelOrder() {
        const queue = [this.root]
        while (queue.length) {
            let current = queue.shift()
            console.log(current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }


    minVal(node = this.root){
        if(!node.left){
            return node.left
        }else{
            return this.minVal(node.left)
        }
    }

    maxVal(node = this.root){
        if (!node.right) {
            return node.right
        }else{
            return this.maxVal(node.right)
        }
    }

    delete(value){
        this.root = this.#deleteVal(value,this.root)
        
    }

    #deleteVal(value,node){
        if(node===null) return node
        if () {
            
        }
    }

}



const tree = new BinaryTree()
tree.insert(53)
tree.insert(213)
tree.insert(43)
tree.insert(27676)
tree.insert(223)
tree.insert(2)
tree.postOrder()
console.log('\n');
tree.preOrder()
console.log('\n');
tree.inOrder()