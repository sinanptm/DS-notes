const {log}=require("console")
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.size =0
        this.head = null;
    }
    isEmpty(){
        return this.size <= 0 
    }
    getSize(){
        return this.size
    }
    insertFirst(data){
        if (data===null||typeof data === "undefined") {
            return console.log('no data to insert');
        }
        let node = new Node(data)
        node.next = this.head
        this.head = node
        console.log(data,' added at the first');
        this.size++;
    }
    getList(){
      
        if (this.isEmpty()) {
            return console.log('no data');
        }
        let cur = this.head;
        let data = []
        while (cur) {
            data.push(cur.data)
            cur = cur.next
        }
        return data
    }
    insertLast(data){
        if (data===null||typeof data === "undefined") {
            return console.log('no data to insert');
        }
        if (this.size<=0) {
            this.insertFirst(data)
            return
        }
        let cur = this.head 
        while (cur.next) {
            cur = cur.next;
        }
        let node = new Node(data);
        cur.next = node;
        this.size++;
        log(data,'added at the last')
    }

    insertAt(data,index){
        if (data===null||typeof data === "undefined") {
            return console.log('no data to insert');
        }
        if (this.size<index) {
            return log('index not found')
        }
        let count = 0;
        let cur = this.head;
        let prev = null
        while (count < index) {
            count++
            prev = cur
            cur = cur.next;
        }
        const node = new Node(data,cur)
        prev.next = node
        this.size++;
        log(data,' added at ',index)
    }
    sortList(){
        let list = this.getList()
        console.log(quickSort(list));
    }
}

const quickSort = arr => {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];

    for (const el of arr.slice(0, arr.length - 1)) {
        el < pivot ? leftArray.push(el) : rightArray.push(el)
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}


class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    insert(value) {
        const node = new DoublyNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    remove(value) {
        if (this.isEmpty()) {
            return null;
        }

        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return value;
            }
            current = current.next;
        }

        return null;
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let current = this.head;
            let list = '';
            while (current) {
                list += `${current.value} <-> `;
                current = current.next;
            }
            list += 'null';
            console.log(list);
        }
    }
}

class CircularSinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            node.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
        }
        this.size++;
    }

    remove(value) {
        if (this.isEmpty()) {
            return null;
        }

        let current = this.head;
        let previous = null;
        do {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = this.head.next;
                    let tail = this.head;
                    while (tail.next !== current) {
                        tail = tail.next;
                    }
                    tail.next = this.head;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return value;
            }
            previous = current;
            current = current.next;
        } while (current !== this.head);

        return null;
    }

    search(value) {
        let current = this.head;
        do {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        } while (current !== this.head);

        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let current = this.head;
            let list = '';
            do {
                list += `${current.value} -> `;
                current = current.next;
            } while (current !== this.head);
            list += `(head)`;
            console.log(list);
        }
    }
}

class CircularDoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    insert(value) {
        const node = new CircularDoublyNode(value);
        if (this.isEmpty()) {
            this.head = node;
            node.next = this.head;
            node.prev = this.head;
        } else {
            let tail = this.head.prev;
            tail.next = node;
            node.prev = tail;
            node.next = this.head;
            this.head.prev = node;
        }
        this.size++;
    }

    remove(value) {
        if (this.isEmpty()) {
            return null;
        }

        let current = this.head;
        do {
            if (current.value === value) {
                if (current === this.head) {
                    let tail = this.head.prev;
                    this.head = this.head.next;
                    this.head.prev = tail;
                    tail.next = this.head;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return value;
            }
            current = current.next;
        } while (current !== this.head);

        return null;
    }

    search(value) {
        let current = this.head;
        do {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        } while (current !== this.head);

        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let current = this.head;
            let list = '';
            do {
                list += `${current.value} <-> `;
                current = current.next;
            } while (current !== this.head);
            list += `(head)`;
            console.log(list);
        }
    }
}
