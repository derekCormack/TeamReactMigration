import React from 'react'

/// source:   https://medium.com/better-programming/implementing-a-stack-in-javascript-73d1aa0483c1

class StackLifo extends React.Component {
    
    constructor() {
        super();
        this.data = [];
        this.topElement = 0;
    }


    push(element) { //last in ...always
        this.data[this.topElement] = element;
        this.topElement = this.topElement + 1;
    }


    pop() {
        if (!this.isEmpty) {
            this.topElement = this.topElement - 1;
            return this.data.pop();
        }
    }

    length() {
        return this.topElement;
    }


    isEmpty() {
        return this.topElement === 0;
    }

    peek() { //returns top element
        return this.data[this.topElement - 1];
    }

    print() {
        var top = this.topElement - 1; // because top points to index where new    element to be inserted
        while (top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }


}
export default StackLifo;