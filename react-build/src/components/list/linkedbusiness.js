

class Stack{

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
        const cake = new Pancake(id, type, diameter, heatLevel);
        
        if (this.current) { 
            cake.nextCake = this.current.nextCake;
            cake.nextCake.prevCake = cake;

            this.current.nextCake = cake;
            cake.prevCake = this.current;

            this.current = cake;
        } else {
            cake.nextCake = cake;
            cake.prevCake = cake;
            this.current = cake;
        }
        return id;
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

    class Pancake {
        constructor(id, type, diameter, heatLevel) {
            this.id = id;
            this.type = type;
            this.diameter = diameter;
            this.heatLevel = heatLevel;
        }
    }







export default { Pancake, Stack};