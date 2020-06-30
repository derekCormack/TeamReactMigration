import funcs from './linkedbusiness.js';


test('Our Pancake Class', () => {
    let flapjack = new funcs.Pancake('p1',"wheat",10,'hot');
    expect(flapjack.type).toBe("wheat");
    expect(flapjack.id).toBe('p1');
});

test('Our Stacks Class', () => {
    const cakeStack = new funcs.Stack();
    expect(cakeStack.get()).toBeNull();

    cakeStack.insert("wheat",10,'hot');
    expect(cakeStack.get().id).toBe('p1');

    expect(cakeStack.next().id).toBe('p1');
    expect(cakeStack.next().id).toBe('p1');

    expect(cakeStack.prev().id).toBe('p1');
    expect(cakeStack.prev().id).toBe('p1');

    cakeStack.insert("wheat",8,'cold');
    expect(cakeStack.get().id).toBe('p2');

    expect(cakeStack.next().id).toBe('p1');
    expect(cakeStack.next().id).toBe('p2');
    expect(cakeStack.next().id).toBe('p1');

    expect(cakeStack.prev().id).toBe('p2');
    expect(cakeStack.prev().id).toBe('p1');
    expect(cakeStack.prev().id).toBe('p2');

    cakeStack.insert("whole wheat",13,'lukewarm');
    expect(cakeStack.get().id).toBe('p3');
    expect(cakeStack.next().id).toBe('p1');
    expect(cakeStack.next().id).toBe('p2');
    expect(cakeStack.next().id).toBe('p3');
    expect(cakeStack.next().id).toBe('p1');
    expect(cakeStack.prev().id).toBe('p3');
    expect(cakeStack.prev().id).toBe('p2');
    expect(cakeStack.prev().id).toBe('p1');

    cakeStack.insert("whole wheat",14,'medium');
    expect(cakeStack.get().id).toBe('p4');
    expect(cakeStack.prev().id).toBe('p1');
    expect(cakeStack.next().id).toBe('p4');
    expect(cakeStack.next().id).toBe('p2');
    expect(cakeStack.next().id).toBe('p3');
    expect(cakeStack.next().id).toBe('p2');
});

test('test insert & prev', () => {
    const cakeStack = new funcs.Stack();
    expect(cakeStack.totalNodes()).toBe("No Pancakes Yet");   
    const startKey = cakeStack.insert("wheat",8,'cold');
    cakeStack.insert("wheat",9,'warm');
    cakeStack.insert("oat",10,'hot');
    cakeStack.prev();
    cakeStack.insert("protein",11,'very hot');
    
    cakeStack.find(startKey);

    expect(cakeStack.get().id).toBe('p1');
    expect(cakeStack.get().diameter).toBe(8);

    expect(cakeStack.totalNodes()).toBe("38 total inches of diameter");
    expect(cakeStack.firstNode().id).toBe("p1");
    expect(cakeStack.lastNode().id).toBe("p4");

});