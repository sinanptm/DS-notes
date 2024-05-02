// Min Heap Implementation

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper function to get the parent index of a node
    parent(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Helper function to get the left child index of a node
    leftChild(index) {
      return 2 * index + 1;
    }
  
    // Helper function to get the right child index of a node
    rightChild(index) {
      return 2 * index + 2;
    }
  
    // Method to swap two elements in the heap
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Method to insert a new element into the min heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Method to restore the heap property upwards
    heapifyUp(index) {
      let currentIndex = index;
      while (currentIndex > 0 && this.heap[currentIndex] < this.heap[this.parent(currentIndex)]) {
        this.swap(currentIndex, this.parent(currentIndex));
        currentIndex = this.parent(currentIndex);
      }
    }
  
    // Method to get the minimum element from the heap
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
  
    // Method to restore the heap property downwards
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
  }
  
  // Max Heap Implementation
  
  class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper functions for parent and child indices and swapping
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
  
    // Insertion method
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Restoring heap property upwards
    heapifyUp(index) {
      let currentIndex = index;
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[this.parent(currentIndex)]) {
        this.swap(currentIndex, this.parent(currentIndex));
        currentIndex = this.parent(currentIndex);
      }
    }
  
    // Extracting maximum element
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
  
    // Restoring heap property downwards
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
  