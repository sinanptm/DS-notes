class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    size() {
        return this.rear - this.front;
    }
    isEmpty() {
        return this.size() === 0;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }
    print() {
        const queueItems = [];
        for (let i = this.front; i < this.rear; i++) {
            queueItems.push(this.items[i]);
        }
        console.log(queueItems);
    }
    clear() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    contains(element) {
        for (let i = this.front; i < this.rear; i++) {
            if (this.items[i] === element) {
                return true;
            }
        }
        return false;
    }
}
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    size() {
        return this.currentLength;
    }
    isEmpty() {
        return this.size() === 0;
    }
    isFull() {
        return this.size() === this.capacity;
    }
    enqueue(el) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = el;
            this.currentLength++;
            if (this.front === -1) {
                this.front = this.rear;
            }
        } else {
            console.log("Queue is full");
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }
    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let i;
            let str = '';
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[i];
            console.log(str);
        }
    }
    clear() {
        this.items = new Array(this.capacity);
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    contains(element) {
        if (this.isEmpty()) {
            return false;
        }
        for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
            if (this.items[i] === element) {
                return true;
            }
        }
        if (this.items[this.rear] === element) {
            return true;
        }
        return false;
    }
}



class Deque {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.items[this.front] = element;
        } else if (this.front > 0) {
            this.front--;
            this.items[this.front] = element;
        } else {
            for (let i = this.rear; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.rear++;
            this.items[0] = element;
        }
    }

    addRear(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    removeRear() {
        if (this.isEmpty()) {
            return null;
        }
        this.rear--;
        const item = this.items[this.rear];
        delete this.items[this.rear];
        return item;
    }

    peekFront() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }

    peekRear() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.rear - 1];
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        const queueItems = [];
        for (let i = this.front; i < this.rear; i++) {
            queueItems.push(this.items[i]);
        }
        console.log(queueItems);
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 1, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift().element;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0].element;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.map(item => item.element));
    }
}
