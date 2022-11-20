/**
 * Number of operations to be implemented on a queue
 * enqueue(element): add an element to the queue.
 * dequeue: remove the oldest element from the queue.
 * peek(): get the value of the front of queue without removing it.
 * isEmpty(): check if the queue is empty.
 * isfull(): check if the queue is Full.
 * print(): visualize the elements in the queue.
 */

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.currentLength = 0;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) return this.items[this.front];
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
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(100)
console.log(queue.peek());
queue.print();
console.log(queue.isFull());
