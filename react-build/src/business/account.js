
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

         if (this.counter===1) {
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
    deleteAcct(key) {
        let account = this.getAccount(key);
        let index = this.allAccounts.indexOf(account)
        this.allAccounts.splice(index, 1);
    }
}



// class AccountController 
// removeAcct()
// deleteAcct()
// totalAcctBalance()
// assignKey()
// accountController()
// showUpdatedBalance()



// *****example function() for comparison (derek)
// class AccountController {

//     accounts = [];

//     constructor() { }

//     addAccount(account) {            //typescript would be useful here.
//         this.accounts.push(account);

//         this.accounts.forEach(acc => {
//             console.log("Account Name: ", acc.accountName, "Account Balance: ", acc.currentBalance, "Account Type: ", acc.accountType);
//         })
//     }

//     changeAccount(accountType) {
//         let account = undefined;
//         this.accounts.forEach(acc => {
//             if(accountType === acc.accountType) {
//                 account = acc;
//             }
//         })
//         return account;
//     }

//     getAccounts() {
//         return this.accounts;
//     }

//     printAccount(acc) {
//         return "Account Name: " + acc.accountName + "Account Balance: " + acc.currentBalance + "Account Type: " + acc.accountType;
//     }
// // display account info button
//     getTotal() {
//         let total = 0;
//         this.accounts.forEach(acc => {
//             total = total + parseInt(acc.currentBalance)
//         })
//         return total;
//     }

//     getHighestBalance() {
//         let highest = 0;
//         this.accounts.forEach(acc => {
//            if(parseInt(acc.currentBalance) > highest) {
//                highest = parseInt(acc.currentBalance);
//            }
//         })
//         return highest;
//     }

//     getLowestBalance() {
//         let lowest = 0;
//         //Initializing lowest account balance with very first account balance
//         lowest = parseInt(this.accounts[0].currentBalance);
//         this.accounts.forEach(acc => {
//            if(parseInt(acc.currentBalance) < lowest) {
//                lowest = parseInt(acc.currentBalance);
//            }
//         })
//         return lowest;
//     }

//     removeAccount(accType) {
//         //We have to remove the account object from this.accounts array based on the the deleted account type
//         for(let i = 0; i < this.accounts.length; i++) {
//             if(this.accounts[i].accountType === accType.toString()) {
//                 let deletedAccount = this.accounts.splice(i, 1);
//                 console.log("Deleted Account: ", deletedAccount);
//             }
//         }
//     }

// }

export default { AccountController, Account };