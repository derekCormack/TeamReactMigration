
import Account from './account.js';

test('Deposit', () => {
    let myAccount = new Account.Account("k1", 'Derek', "Savings", 500)       //This line create an object of Account class and initializes the properties
    expect(myAccount.deposit(50)).toBe(Number(550).toFixed(2));
    expect(myAccount.deposit(-50)).toBe("Amount entered is negative");
    expect(myAccount.deposit(150)).toBe(Number(700).toFixed(2));
});

test('Withdrawal', () => {
    let myAccount = new Account.Account("k2",'Derek', "Savings", 500)       //This line create an object of Account class and initializes the properties
    expect(myAccount.withdrawal(50)).toBe(Number(450).toFixed(2));
    expect(myAccount.withdrawal(-50)).toBe("Amount is negative");
    expect(myAccount.withdrawal(750)).toBe("Insufficient balance");
    expect(myAccount.withdrawal(150)).toBe(Number(300).toFixed(2));
});

// AccountController Tests
test('assignKey', () => {
    const myAccountCtrl = new Account.AccountController()
    let key = myAccountCtrl.assignKey();       //This line create an object of Account class and initializes the properties
    expect(key).toBe("k1");
    key = myAccountCtrl.assignKey();
    expect(key).toBe("k2");    
});

test('Has the Account been added?', () => {
    const myAccountCtrl = new Account.AccountController()
    //let addAcct = new Account.Account("k1",'Bacon', "Savings", 500)       //This line create an object of Account class and initializes the properties
    let key = myAccountCtrl.addAcct('Bacon', "Savings", 500);
    expect(myAccountCtrl.allAccounts.length).toBe(1);
    key = myAccountCtrl.addAcct('Bacon', "Savings", 500)
    expect(myAccountCtrl.allAccounts.length).toBe(2);

    let account = myAccountCtrl.getAccount("k1");
    expect(account.name).toBe("Bacon");
    expect(account.type).toBe("Savings");
    expect(account.balance).toBe(500);

    let totBal = myAccountCtrl.totalAcctBalance();
    expect(totBal).toBe(1000);

    key = myAccountCtrl.addAcct('Bac', "Savings", 700);
    totBal = myAccountCtrl.totalAcctBalance();
    expect(totBal).toBe(1700);

    let highestBalance = myAccountCtrl.getHighestBalance();
    expect(highestBalance).toBe(700);

    let lowestBalance = myAccountCtrl.getLowestBalance();
    expect(lowestBalance).toBe(500);

    myAccountCtrl.deleteAcct("k1");
    expect(myAccountCtrl.allAccounts.length).toBe(2);

});

// test('Highest Balance', () => {
//     const myAccountCtrl = new Account.AccountController()



//SAMPLE TESTS  (derek)


// test('Does it create an object of Account?', () => {
//     let accountObject = new Account('Derek', 500)       //This line create an object of Account class and initializes the properties
//     expect(accountObject.accountName).toBe("Derek");
//     expect(accountObject.currentBalance).toBe(500);
// });

// test('Does it deposit the money in Account?', () => {
//     let accountObject = new Account('Derek', 500);
//     accountObject.deposit(111);
//     expect(accountObject.currentBalance).toBe(611);
//     expect(accountObject.currentBalance).not.toBe(612);
// });

// test('Does it withdrawl the money from Account?', () => {
//     let accountObject = new Account('Derek', 500);
//     accountObject.withdraw(150);
//     expect(accountObject.currentBalance).toBe(350);
//     expect(accountObject.currentBalance).not.toBe(612);
//     accountObject.withdraw(500);
//     expect(accountObject.currentBalance).toBe(350);
// });

// test('Does SHOW contain a value?', () => {
//     let accountObject = new Account('Derek', 500);
//     expect(accountObject.show()).toBe(500);
// });
