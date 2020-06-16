import React from 'react';
import './bankborder.css';
// import { BootstrapTable} from 'react-bootstrap-table';
// import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import func from '../../business/account';
import AccountCard from './accountCard';

class Accounts extends React.Component {
    //Creating object as "accController" of Class AccountController...


    constructor() {
        super();
        this.accController = new func.AccountController();
        this.state = {
            allReactAccounts: [],
            idAccountName: 0,
            idAccountBalance: 0,
            idAccountType: "Chequing",
            selAcct: "Account not selected",
            counter: 0
        }

    }

    handleSelectAccount = (e) => {
        console.log("doesthis work")

        this.setState({
            selAcct: e.target.id
        })

        console.log("Selected card: ",this.state.selAcct)
    }


    createClick = () => {

        console.log(this.state.idAccountName)
        console.log(this.state.idAccountBalance)
        //step 1: create the object "account" of class Account
        //step 2: add all values to the account attributes
        //step 3: push that account object to AccountController's allAccounts array
        //step 4: save AccountController to the React state's allReactAccounts
        // let account = new Account();
        // account.key = ...;
        // account.name = ...;
        // account.type = ...;
        // account.balance = ...;

        this.accController.addAcct(this.state.idAccountName, this.state.idAccountType, this.state.idAccountBalance)
        // let newAccounts = []
        // for (var i = 0; i < this.accController.allAccounts.length; i++) {
        //     console.log(this.accController.allAccounts[i].type)
        //     newAccounts.push(<AccountCard key={i} selectAccount={this.handleSelectAccount} name={this.accController.allAccounts[i].name} type={this.accController.allAccounts[i].type} balance={this.accController.allAccounts[i].balance} />);
        // }
        //this.setState({count: this.state.count++});
        // this.setState({
        //     allReactAccounts: newAccounts
        // })
        this.setState({
            counter: 0
        });
        console.log("new state 1: ", this.state);
        console.log("is allAccounts actually pushed? ", this.accController.allAccounts);

    }
    getAccountType = (e) => {
        this.setState({
            idAccountType: e.target.value
        })
    }
    getAccountName = (e) => {
        this.setState({
            idAccountName: e.target.value
        })
    }
    getAccountBalance = (e) => {
        let bal =Number(e.target.value);
        this.setState({

            idAccountBalance: bal
        })
    }
    delete = () => {
        console.log("hi");
        this.accController.deleteAcct("k1");
        this.setState({
            counter: 0
        });
    }

    depositMoney = () => {
        let position=this.accController.findAccount(this.state.selAcct);
        let deposit = document.getElementById("idAccountDeposit").value;
        console.log("Deposited money: ", deposit);
        console.log(this.accController.allAccounts[position].deposit(Number(deposit)))
        // this.setState({
        //     allReactAccounts: this.accController.allAccounts
        //     //idAccountBalance: parseInt(this.state.idAccountBalance) + parseInt(deposit)
        // });
        console.log("Updated balance after deposit: ", this.state.idAccountBalance);
        this.setState({
            counter: 0
        });
    }

    withdrawMoney = () => {
        let position=this.accController.findAccount(this.state.selAcct);
        let withdraw = document.getElementById("idAccountWithdraw").value;
        console.log("Withdrawl money: ", withdraw);
        console.log(this.accController.allAccounts[position].withdrawal(Number(withdraw)))
        this.setState({
            idAccountBalance: parseInt(this.state.idAccountBalance) - parseInt(withdraw)
        })
        console.log("amount has been withdrawn: ", this.state.idAccountBalance);
    }

    render() {
        // const accs = this.accController.allAccounts.map((a)=> {
        //     return a.name
        // });
        const total = this.accController.totalAcctBalance();
        const highest = this.accController.getHighestBalance();
        const lowest = this.accController.getLowestBalance();
        
        const accs = [];
         
        for (var i = 0; i < this.accController.allAccounts.length; i++) {
            accs.push(<AccountCard key={i} selectAccount={this.handleSelectAccount} name={this.accController.allAccounts[i].name} type={this.accController.allAccounts[i].type} balance={this.accController.allAccounts[i].balance} />);
        }
        return (
            <div>


                <div className="bankContainer">
                    <h1>------hello world------</h1>
                    <input id="idAccountName" onChange={this.getAccountName} placeholder="Account Name input"></input>
                    <br />
                    <input id="idAccountBalance" type="number" onChange={this.getAccountBalance} placeholder="Account deposit"></input><br />
                    <select id="idAccountType" onChange={this.getAccountType}>
                        <option>Chequing</option>
                        <option>Savings</option>
                    </select><br />
                    <button onClick={this.createClick}>Create account</button><br />
                    <br /><br /><br />
                    <p className="currentAccount">
                        Selected Account: {this.state.selAcct}<br /><br />
                    </p>
                    <button onClick={this.delete}>delete account</button><br />
                    <span>enter amount to deposit</span><br />
                    <input id="idAccountDeposit" type="number" placeholder="Enter Amount" />
                    <button onClick={this.depositMoney}>deposit</button><br />
                    <span>enter amount to withdraw</span><br />
                    <input id="idAccountWithdraw" type="number" placeholder="Enter Amount" />
                    <button onClick={this.withdrawMoney}>withdraw</button><br /><br /><br />
                    <span className="currentAccount">Total of Accounts:  {total} </span><br />
                    <span className="currentAccount">Highest Account:  {highest}</span><br />
                    <span className="currentAccount">Lowest Account: {lowest}</span><br />
                    <span>List of accounts</span><br /><br />
                    {accs}
                    {/* {this.state.allReactAccounts} */}
                </div>
            </div>
        );
    }
}

export default Accounts;


//https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982
// https://medium.com/@mauro.canuto88/solid-principles-3836650e1751

// solid principle: 

//1. Single Responsibility Principle (each COMP should do only ONE thing, ONE reason to change)
//2.  open closed principle ( should be open for extension....WITHOUT modification)
//3.  liskov substitution principle:  animal(baseClass)>exends to child class.  children are interchangeable,
                // without root modification(parent)
//4.  interface seperation principle (childClass should not depend on methods of other Childclass)
//  5. dependendancy inversion pricinciple: parent should not be dependant of child!  parent is independant.




 //  1. business logic first though testing.
 //  2.  Wireframe...html code.
//   3.  click listners conect html to business logic.Account
//   4.  iterate for functionality....business logic will usually fail here......

// Account components:    
// 1. createAcccountComp. (creates account ONLY, ), deleteAcctComp,witdrawAcctComp,depositAcctComp,updateAcctcomp all JScomp files.
// 2. transactionComponent.  (display to chose ,dep, with)
   //3. resultComponent.  (display results)






