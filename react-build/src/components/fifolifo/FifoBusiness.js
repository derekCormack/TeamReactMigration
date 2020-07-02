// import React from 'react';

class QueueFifo  {
    constructor() {
        // super();
        this.data = [];
        this.topElement = 0;
    }


    enQueue(element) { //last in ...always
        this.data[this.topElement] = element;
        this.topElement = this.topElement + 1;
    }


    deQueue() {
        if (this.topElement === 0) {
            return 0
            
       } else {
        this.topElement = this.topElement - 1;
        this.data.shift();
        }
    }

    length() {
        return this.topElement;
    }


    isEmpty() {
        return this.topElement === 0;
    }

   
    print() {
        var top = this.topElement - 1; // because top points to index where new    element to be inserted
        while (top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }
}
export default QueueFifo;

