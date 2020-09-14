
//ref: https://www.geeksforgeeks.org/implementation-linkedlist-javascript/    use add(element code)
class Stack {  //LINK LIST CLASS

    constructor() {
        this.current = null;
        this.count = 0;
    }

    get() {
        return this.current;
    }


    insert(type, diameter, heatLevel) {
        this.count++;
        const id = 'p' + this.count;
        const cake = new Pancake(id, type, diameter, heatLevel);  //var node = new Node(element); 
       
        if (this.current) {

            cake.nextCake = this.current.nextCake;
            this.current.nextCake = cake;
            cake.nextCake.prevCake = cake;
            cake.prevCake = this.current;

            this.current = cake;
        } else {
            cake.nextCake = cake;
            cake.prevCake = cake;
            this.current = cake;
        }
        return id;
    }
    delete() {
        if (this.current) {
            if (this.current === this.current.nextCake) {
                this.current = null
                console.log("first case")
                return 0
            }
            console.log("second case")
            this.current.nextCake.prevCake = this.current.prevCake
            this.current.prevCake.nextCake = this.current.nextCake
            this.current = this.current.prevCake;

        } else {
            return 0
        }

    }
    next() {
        if (this.current) {
            this.current = this.current.nextCake;
        }
        return this.current;
    }
    prev() {
        if (this.current) {
            this.current = this.current.prevCake;
        }
        return this.current;
    }
    // total of all nodes
    totalNodes() {// determine total inches of all pancakes laid side to side

        if (!this.current) {
            return "No Pancakes Yet";
        }

        let total = 0
        const startid = this.current.id;
        while (this.current.nextCake.id !== startid) {

            total = total + this.current.diameter

            this.next();
        }
        total = total + this.current.diameter
        this.next()
        return total + " total inches of diameter"

    }
    // 
    firstNode() {//determine first node of stack
        let startId = this.current.id
        let bestId = this.current.id
        let best = this.current
        this.next();
        while (this.current.id !== startId) {
            if (bestId > this.current.id) {
                bestId = this.current.id
                best = this.current
            }
            this.next();
        }

        // this.find("p1");
        this.current = best
       
    }

    lastNode() {//determine last node of stack
        let startId = this.current.id
        let bestId = this.current.id
        let best = this.current
        this.next();
        while (this.current.id !== startId) {
            if (bestId < this.current.id) {
                bestId = this.current.id
                best = this.current
            }
            this.next();
        }

        // this.find("p1");
        this.current = best
       
    }

    find(id) {
        if (!this.current) {
            return false;
        }
        const startid = this.current.id;
        // console.log(this.current.id);

        while (this.current.id !== id) {
            this.next();
            // console.log(this.current.id);
            // we didn't find it
            if (startid === this.current.id) {
                return false;
            }
        }
        return true;
    }
}

class Pancake {   //NODE CLASS
    constructor(id, type, diameter, heatLevel) {
        this.id = id;
        this.type = type;
        this.diameter = diameter;
        this.heatLevel = heatLevel;
    }
}







export default { Pancake, Stack };