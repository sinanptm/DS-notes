




class Node {
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.length = 0
    }

    size(){
        return this.length
    }

    insertFirst (data){
        this.head = new Node(data,this.head)
        this.length++
        return
    }
    removeFirst(){
        let data = this.head.data;
        this.head = this.head.next;
        this.length--
        return data
    }
    first(){
        return this.head.data
    }
    show(){
        let cur = this.head
        let res = []
        while (cur) {
            res.push(cur.data)
            cur = cur.next
        }
        return res
    }
}


class Stack {
    constructor() {
        this.bucket = new LinkedList()
    }
    push(el) {
        this.bucket.insertFirst(el)
        return
    }
    pop() {
        return this.bucket.removeFirst()
    }
    size() {
        return this.bucket.size()
    }
    peek() {
        return this.bucket.first()
    }

    isEmpty() {
        return this.size() === 0
    }

    display(){
        return console.log(this.bucket.show());
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
console.log(s.peek()); 