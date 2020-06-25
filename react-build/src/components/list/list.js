import React from 'react';

// doubly linked list   standard methods
class dblLinkedList {
  constructor() {
    this.head = this.tail = null
  }

  //add to end of list(tail)
  append(value) {
    //case one:  if list is empty, case two: capture current tail
    if (!this.tail) { //if NOT this head is empty
      this.head = this.tail = new Node(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }

  // add to begining of list/head
  prepend(value) {
    //if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
  }

  deleteHead() {
    //if list is empty
    if (!this.head) { //if there is NO head
      return null
    } else {
      let removedHead = this.head
      // if 1 node left
      if (this.head === this.tail) { //last node on list
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null //remove any previous pointers
      }
      return removedHead.value
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null
    } else {
      let removedTail = this.tail //if 1 node
      return removedTail.value
    }
  }

  search(value) {
    let currentNode = this.head //track node

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }

  // class Node {
  // constructor(value, prev, next) {
  //   this.value = value
  //   this.prev = prev || null
  //   this.next = next || null
  // }
}



const List = () => {

  return (

    <
    div >

    .... <
    /div>
  );
}

export default List;