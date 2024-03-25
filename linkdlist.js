class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
        this.prev = null;
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

    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.insertFirst(data)
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
            this.size++;
        }
    }


    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.insertFirst(data)
            return;
        }

        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;
            count++;
            current = current.next
        }

        node.next = current
        previous.next = node
        this.size++;

    }

    getFirst() {
        return console.log(this.head);
    }


    getAtIndex(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
    }

    getLast() {
        return this.getAtIndex(this.size - 1)
    }

    removeAt(index) {
        if (index > 0 && index > this.size) {
            return
        }
        let current = this.head;
        let previous
        let count = 0
        if (index === 0) {
            this.head = current.next
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;

            }
            previous.next = current.next;

        }
        this.size--;
    }


    clearList() {
        let current = this.head;
        while (current !== null) {
            let nextNode = current.next;
            current.next = null;
            current = nextNode;
        }
        this.head = null;
        this.size = 0;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}


// const ls = new LinkedList();
// ls.insertFirst(200);
// ls.insertFirst(400);
// ls.insertAt(504, 2);
// ls.insertLast(300);
// ls.getLast();






class DoublyLinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    legnth() {
        return this.size
    }

    isEmpty() {
        return this.size === 0;
    }
    addFirtst(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node
            this.head = node;
        }
        this.size++;
    }
    addLast(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.addFirtst(data)
            this.tail = node
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node
        }
    }
    removeFitrst() {
        if (this.isEmpty()) {
            return "List is Empty";
        }
        const data = this.head;

        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return data;
    }

    removLast() {
        if (this.isEmpty()) {
            return "List is Empty";
        }
        const value = this.tail.data;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null
        }
        this.size--;
        return value;

    }

    printList() {
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        let current = this.head;
        let data = []
        while (current) {
            data.push(current.data)
            current = current.next;
        }
        console.log(data);
    }
    printReversedList() {
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        let current = this.tail;
        let data = []
        while (current) {
            data.push(current.data)
            current = current.prev;
        }
        console.log(data);
    }

}






