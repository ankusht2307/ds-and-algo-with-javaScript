/**
 * Number of operations to be implemented on a queue
 * enqueue(element): add an element to the queue.
 * dequeue: remove the oldest element from the queue.
 * peek(): get the value of the front of queue without removing it.
 * isEmpty(): check if the queue is empty.
 * size(): get the number of elements in the queue.
 * print(): visualize the elements in the queue.
 */

class OptimizedQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
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

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(JSON.stringify(this.items));
  }
}

const queue = new OptimizedQueue();

console.log(queue.peek());
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(5);
queue.enqueue(23);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.size());
queue.print();
