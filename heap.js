class Heap {
    constructor() {
        this.heap = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    swap(i1, i2) {
        [this.heap[i2], this.heap[i1]] = [this.heap[i1], this.heap[i2]];
    }
}


class MinHeap extends Heap {
    constructor() {
        super()
        this.heap = []
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index) {
        while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
            this.swap(index, this.parent(index))
            index = this.parent(index)
        }
    }
    getMin() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0);
        return min
    }
    heapifyDown(index) {
        while (true) {
            let leftChildIndex = this.leftChild(index)
            let rightChildIndex = this.rightChild(index)
            let smallest = index
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[index]) {
                smallest = leftChildIndex
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[index]) {
                smallest = rightChildIndex
            }
            if (smallest !== index) {
                this.swap(index, smallest)
                index = smallest
            } else {
                break
            }
        }
    }
    remove(value) {
        const index = this.heap.indexOf(value)
        if (index === -1) return false;
        this.heap[index] = this.heap.pop();
        this.heapifyDown(index)
        return true
    }
    findMax() {

    }
}







class MaxHeap extends Heap {
    constructor() {
        super()
        this.heap = []
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index) {
        let currentIndex = index
        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[this.parent(index)]) {
            this.swap(currentIndex, this.parent(currentIndex))
            currentIndex = this.parent(currentIndex)
        }
    }
    getMax() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0);
        return max
    }
    heapifyDown(index) {
        while (true) {
            let leftChildIndex = this.leftChild(index)
            let rightChildIndex = this.rightChild(index)
            let largest = index
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[index]) {
                largest = leftChildIndex
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[index]) {
                largest = rightChildIndex
            }
            if (largest !== index) {
                this.swap(index, largest)
                index = largest
            } else {
                break
            }
        }
    }
    remove(value) {
        const index = this.heap.indexOf(value)
        if (index === -1) return false;
        this.heap[index] = this.heap.pop();
        this.heapifyDown(index)
        return true
    }
}






// Example usage
const minHeap = new MinHeap();
const maxHeap = new MaxHeap();


// ! In a min-heap, for any node i other than the root, the value of the parent node is less than or equal to the value of its children. The minimum value is at the root.
// ! In a max-heap, for any node i other than the root, the value of the parent node is greater than or equal to the value of its children. The maximum value is at the root.

function heapSortAscending(arr) {
    const minHeap = new MinHeap();
    for (let num of arr) {
        minHeap.insert(num);
    }
    const sortedArr = [];
    while (minHeap.heap.length > 0) {
        sortedArr.push(minHeap.extractMin());
    }
    return sortedArr;
}
function heapSortDescending(arr) {
    const maxHeap = new MaxHeap();
    for (let num of arr) {
      maxHeap.insert(num);
    }
    const sortedArr = [];
    while (maxHeap.heap.length > 0) {
      sortedArr.push(maxHeap.extractMax());
    }
    return sortedArr;
  }