import QueueFifo from './FifoBusiness.js';
import StackLifo from './LifoBusiness.js';


// test('StackLifo: insert element into stack', () => {
//     const stack = new StackLifo(); //creating the object of Class StackLifo;
//     expect(stack.isEmpty()).toBe(true);
//     stack.pushZ(50);
//     expect(stack.isEmpty()).toBe(false);
//     stack.pushZ(25);
//     stack.pushZ(12);
//     stack.pushZ(10);
//     stack.pushZ(8);
//     stack.pushZ(4);
//     expect(stack.length()).toBe(6);
//     console.log(stack.print());
   
// });

// test('StackLifo: remove element from stack', () => {
//     const stack = new StackLifo(); //creating the object of Class StackLifo;
//     stack.pushZ(50);
//     stack.pushZ(25);
//     stack.pushZ(12);
//     expect(stack.peek()).toBe(12);
//     stack.pushZ(10);
//     stack.pushZ(8);
//     stack.pushZ(4);
//     expect(stack.popZ()).toBe(4);
//     console.log(stack.print());
//     console.log("stack.peek()", stack.peek());
// });

// test('QueueFifo: add element to queue', () => {
//     const queue = new QueueFifo(); //creating the object of Class QueueFifo;
//     queue.enQueue(50);
//     queue.enQueue(25);
//     queue.enQueue(15);
//     expect(queue.length()).toBe(3);
//     console.log("Queue at midpoint", queue)
//     queue.enQueue(10);
//     queue.enQueue(8);
//     queue.enQueue(4);
//     expect(queue.length()).toBe(6)
//     console.log("Queue at end", queue)
    
// });

test('QueueFifo: remove element from queue', () => {
    const queue = new QueueFifo(); //creating the object of Class QueueFifo;
        expect(queue.isEmpty()).toBe(true);
        queue.enQueue(50);
        expect(queue.isEmpty()).toBe(false);
        queue.enQueue(25);
        queue.enQueue(15);
        expect(queue.length()).toBe(3);
        queue.enQueue(10);
        queue.enQueue(8);
        queue.enQueue(4);
        expect(queue.length()).toBe(6)
        console.log("queue before deQueue ONE", queue.data,queue.topElement)
        queue.deQueue();

        console.log("queue after deQueue ONE", queue.data,queue.topElement)
        expect(queue.length()).toBe(5);
        
        queue.deQueue();
        queue.deQueue();
        expect(queue.length()).toBe(3);
        queue.deQueue();
        queue.deQueue();
        queue.deQueue();
        queue.deQueue();  
        expect(queue.length()).toBe(0);
        console.log("queue length =", queue.length());
});