class Account {
    constructor(key, name, type, balance) {
        this.key = key;
        this.name = name;
        this.type = type;
        this.balance = balance;
    }

    deposit(amt) {
        let bal = parseFloat(this.balance)

        if (amt < 0) {
            return "Amount entered is negative";
        } else {
            this.balance = bal + amt
            return (bal += amt);
        }
    }

    withdrawal(amt) {
        if (amt > 0 && this.balance - amt >= 0) {
            return (this.balance -= amt).toFixed(2);
        } else if (amt < 0) {
            return "Amount is negative"
        } else {
            return "Insufficient balance";
        }

    }
}

class AccountController {
    constructor() {
        this.allAccounts = [];
        this.counter = 1;
    }

    assignKey() {
        const k = "k" + this.counter;
        this.counter = this.counter + 1;
        return k;
    }

    addAcct(name, type, balance) {
        const key = this.assignKey();
        const account = new Account(key, name, type, balance);
        this.allAccounts.push(account);
    }
    findAccount(name) {
        for (let i = 0; i < this.allAccounts.length; i++) {
            if (name === this.allAccounts[i].name) {
                return i
            }
        }

    }
    getAccount(key) {
        for (var i = 0; i < this.allAccounts.length; i++) {
            if (key === this.allAccounts[i].key) {
                return this.allAccounts[i];
            }
        }
    }

    totalAcctBalance() {
        let total = 0;
        for (var i = 0; i < this.allAccounts.length; i++) {
            total += this.allAccounts[i].balance;
        }
        return total;
    }

    getHighestBalance() {
        let max = 0;
        for (var i = 0; i < this.allAccounts.length; i++) {
            if (this.allAccounts[i].balance > max) {
                max = this.allAccounts[i].balance;
            }
        }
        return max;
    }

    getLowestBalance() {  

        //if (typeof image_array !== 'undefined' && image_array.length > 0) {

         if (this.allAccounts.length===0) {
            return 0;
        }
            let min = this.allAccounts[0].balance;
            for (var i = 1; i < this.allAccounts.length; i++) {
                if (this.allAccounts[i].balance < min) {
                    min = this.allAccounts[i].balance;
                }
            }
            return min;
        
    }
    deleteAcct(index) {
        //let account = this.getAccount(key);
        //let index = this.allAccounts.indexOf(account)
        this.allAccounts.splice(index, 1);
    }
}
export default { AccountController, Account };