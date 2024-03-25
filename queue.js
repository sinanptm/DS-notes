class Queue {  //! FIFO
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
        return console.log(this.items[this.front]);
    }
    print() {
        console.log(Object.values(this.items));
    }
}

let q = new Queue();

// q.enqueue(324);
// q.enqueue(32434);
// q.peek()
// q.dequeue()
// q.enqueue(32434);
// q.enqueue(4);
// q.peek()
// q.print()





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
        return this.size() === 0
    }
    isFull() {
        return this.size() === this.capacity ;
    }
    onqueue(el) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = el;
            this.currentLength++;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }
    dequeue() {
        if (!this.isEmpty()) {
            return null
        }
        const item = this.items(this.front);
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity
        this.currentLength - 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item
    }

    peek (){
        if (!this.isEmpty()) {
            return console.log(this.items[this.front]);
        }
        return null
    }

    print(){
        if (this.isEmpty()) {
            console.log('Queue us empty');
        }else{
          let i 
          let str = ''
            for (i= this.front; i!==this.rear; i=(i+1)%this.capacity) {
              str += this.items[i]+ ' '
                
            }
            str += this.items[i]
            console.log(str);
        }
    }

}



const  cq = new CircularQueue(5);
cq.onqueue(232)
cq.onqueue('ddw')
cq.onqueue('2112')
