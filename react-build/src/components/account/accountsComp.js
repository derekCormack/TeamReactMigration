import React from 'react';
import './bankborder.css';
// import { BootstrapTable} from 'react-bootstrap-table';
// import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import AccountController from '../../business/account';
import Account from './accountComp';

class Accounts extends React.Component {
    //Creating object as "accController" of Class AccountController...
    accController = new AccountController();

    constructor() {
        super();
        this.state = {
            allAccounts: [<Account name="savings" balance="300" />,
            <Account name="chequing" balance="700" />],
            idAccountName: 0,
            idAccountBalance: 0,
        }
        //this.getAccountName = this.getAccountName.bind(this);        
    }
    
    createClick = () => {
        let accountName = document.getElementById("idAccountName").value
        console.log(this.state.idAccountName)
        console.log(this.state.idAccountBalance)
        this.setState({
            allAccounts: this.accController.allAccounts.push(<Account name= {this.state.idAccountName} balance={this.state.idAccountBalance} />)
        })
        console.log("new state 1: ", this.state);
        console.log("is allAccounts actually pushed? ", this.accController.allAccounts);
        console.log("is allAccounts actually pushed into the state? ", this.state.allAccounts);
    }

    getAccountName =(e)=> {
        this.setState({
            idAccountName: e.target.value
        })
    }

    getAccountBalance =(e)=> {
        this.setState({
            idAccountBalance: e.target.value
        })
    }

    depositMoney = () => {
        let deposit = document.getElementById("idAccountDeposit").value;
        console.log("Deposited money: ", deposit);
        this.setState({
            idAccountBalance: parseInt(this.state.idAccountBalance) + parseInt(deposit)
        });
        console.log("Updated balance after deposit: ", this.state.idAccountBalance);
    }

    withdrawMoney = () => {
        let withdraw = document.getElementById("idAccountWithdraw").value;
        console.log("Withdrawl money: ", withdraw);
        this.setState({
            idAccountBalance: parseInt(this.state.idAccountBalance) - parseInt(withdraw)
        })
        console.log("amount has been withdrawn: ", this.state.idAccountBalance);           
    }


    showBalances = () => {
        console.log("current balance: ", this.state.idAccountBalance);
        document.getElementById("showAccountBalances").innerHTML = this.state.idAccountBalance;
    }

    
    
   // screen refresh? this is when you invoke state change
   //  list of accounts (save in state) grab from JS app, controller
   //   account counter....trigger refresh
   // refresh on "create account"
   //
    
    render() {
        return (
            <div >
                <div className="bankContainer">
                    <h1>------hello world------</h1>
                    <input id="idAccountName" onChange={this.getAccountName} placeholder="Account Name input"></input>
                    <br />
                    <input id="idAccountBalance" onChange={this.getAccountBalance} placeholder="Account deposit"></input><br />
                    <button onClick={this.createClick}>Create account</button><br />
                    <br /><br /><br />
                    <span>choose account to delete?</span><br />
                    <button>delete account</button><br />
                    <span>enter amount to deposit</span><br />
                    <input id="idAccountDeposit"/>
                    <button onClick={this.depositMoney}>deposit</button><br />
                    <span>enter amount to withdraw</span><br />
                    <input id="idAccountWithdraw"/>
                    <button onClick={this.withdrawMoney}>withdraw</button><br /><br /><br />
                    <button onClick={ this.showBalances }>Show Balances</button><br />
                    <span id="showAccountBalances"> </span><br /><br />
                    <button>view balance below: </button><br />
                    <span>total-highest-lowest</span><br />
                    <span>List of accounts</span><br /><br />
                    {this.state.allAccounts}
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






