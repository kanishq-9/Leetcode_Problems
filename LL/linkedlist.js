import LLNode from "./node.js";

class LinkedListDS {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Adding to a LinkedList
  append(data) {
    const newNode = new LLNode(data);
    if (!this.head) {
      this.linkedlist = newNode;
      this.head = newNode;
      this.length++;
    } else {
      this.linkedlist.next = newNode;
      this.linkedlist = this.linkedlist.next;
      this.length++;
    }
  }

  //add first
  appendStart(data) {
    const newNode = new LLNode(data);
    if (this.length === 0) {
      this.head = newNode;
      this.length++;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //Printing a LinkedList
  printLL() {
    let temp = this.head;
    let print = "";
    while (temp != null) {
      print += temp.data + "->";
      temp = temp.next;
    }
    return print + "null";
  }

  //Deleting last from a LinkedList
  deleteLast() {
    //q=p+1
    let p = this.head;
    let q = this.head.next;
    if (!p) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.length--;
      return;
    }

    while (q.next != null) {
      p = p.next;
      q = q.next;
    }
    p.next = null;
    this.length--;
  }

  //Delete first value from LinkedList
  deleteFirst() {
    let temp = this.head;
    if (!temp) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.length--;
      return;
    }
    this.head = this.head.next;
    this.length--;
  }
}

export default LinkedListDS;
