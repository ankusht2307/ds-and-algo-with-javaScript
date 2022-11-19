/**
 * Number of operations to be implemented on a stack
 * push(element): add an element at the top of the stack.
 * pop(): removes the top most element from the stack.
 * peek(): get the value of the top element without removing it.
 * isEmpty(): check if the stack is empty.
 * size(): get the number of elements in the stack.
 * print(): visualize the elements in the stack.
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(20);
stack.push(100);
stack.push(50);
stack.print();
console.log(stack.peek());
console.log(stack.pop());
stack.print();
