// Min Heap Implementation

class MinHeap {
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
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[this.parent(currentIndex)]) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }
  heapifyDown(index) {
    let currentIndex = index;
    while (true) {
      let leftChildIndex = this.leftChild(currentIndex);
      let rightChildIndex = this.rightChild(currentIndex);
      let smallest = currentIndex;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[currentIndex]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }
      if (smallest !== currentIndex) {
        this.swap(currentIndex, smallest);
        currentIndex = smallest;
      } else {
        break;
      }
    }
  }
  remove(value) {
    const index = this.heap.indexOf(value);
    if (index === -1) {
      return false; 
    }
    this.heap[index] = this.heap.pop(); 
    this.heapifyDown(index);
    return true; 
  }
}


class MaxHeap {
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
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[this.parent(currentIndex)]) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }
  heapifyDown(index) {
    let currentIndex = index;
    while (true) {
      let leftChildIndex = this.leftChild(currentIndex);
      let rightChildIndex = this.rightChild(currentIndex);
      let largest = currentIndex;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[currentIndex]) {
        largest = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
        largest = rightChildIndex;
      }
      if (largest !== currentIndex) {
        this.swap(currentIndex, largest);
        currentIndex = largest;
      } else {
        break;
      }
    }
  }
}

// Example usage
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(7);
minHeap.insert(1);
console.log(minHeap.heap); // Output: [1, 2, 7, 4]
console.log(minHeap.extractMin()); // Output: 1

const maxHeap = new MaxHeap();
maxHeap.insert(4);
maxHeap.insert(2);
maxHeap.insert(7);
maxHeap.insert(1);
console.log(maxHeap.heap); // Output: [7, 4, 2, 1]
console.log(maxHeap.extractMax()); // Output: 7


// ! In a min-heap, for any node i other than the root, the value of the parent node is less than or equal to the value of its children. The minimum value is at the root.
// ! In a max-heap, for any node i other than the root, the value of the parent node is greater than or equal to the value of its children. The maximum value is at the root.