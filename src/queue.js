const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor (value){
    this.value=value;
    this.next=null;
  }
}

class Queue {
  constructor () {
    this.head=null;
    this.length=0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.length>0) {
      let link=this.head;
      while (link.next) {
        link=link.next;
      }
      link.next=new Node(value);
    }
    else {
      this.head=new Node(value);
    }
    this.length++;
  }

  dequeue() {
      let link=this.head;
      this.head=link.next;
      this.length=this.length-1;
      return link.value;
    }
}

module.exports = {
  Queue
};
