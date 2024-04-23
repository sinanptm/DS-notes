class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
                                
    removeFirst() {
        if (!this.head) {
            return null;
        }
        let data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    first() {
        return this.head ? this.head.data : null;
    }

    show() {
        let cur = this.head;
        let res = [];
        while (cur) {
            res.push(cur.data);
            cur = cur.next;
        }
        return res;
    }
}

class Stack {
    constructor() {
        this.bucket = new LinkedList();
    }

    push(el) {
        this.bucket.insertFirst(el);
    }

    pop() {
        return this.bucket.removeFirst();
    }

    size() {
        return this.bucket.size;
    }

    peek() {
        return this.bucket.first();
    }

    isEmpty() {
        return this.size() === 0;
    }

    display() {
        console.log(this.bucket.show());
    }
}


const s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
s.push(6)
s.push(7)
s.display()
console.log(s.peek()); 
s.pop()
console.log(s.peek()); 2










module.exports =  LinkedList