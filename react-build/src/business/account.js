
class Account {
    constructor(key, name, type, balance) {
        this.key = key;
        this.name = name;
        this.type = type;
        this.balance = balance;
    }

    deposit(amt) {
        //let amount = parseFloat(amt);
        if (amt < 0) {
            return "Amount entered is negative";
        } else return (this.balance += amt).toFixed(2);
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

class AccountController 
removeAcct()
deleteAcct()
totalAcctBalance()
assignKey()
accountController()
showUpdatedBalance()
