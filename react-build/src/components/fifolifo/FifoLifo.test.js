
import QueueFifo  from './FifoBusiness.js';
import StackLifo from './LifoBusiness.js';


test('insert element into stack', () => {
    const stack = new StackLifo();  //creating the object of Class StackLifo;
    stack.push(50);
    stack.push(25);
    stack.push(12);
    stack.push(10);
    stack.push(8);
    stack.push(4);
    expect(stack.length()).toBe(6);
    console.log(stack.print());
    console.log("stack.peek()", stack.peek());
});

