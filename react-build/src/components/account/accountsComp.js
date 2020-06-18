import React from 'react';
import './bankborder.css';
import func from '../../business/account';
import AccountCard from './accountCard';

class Accounts extends React.Component {

    constructor() {
        super();
        this.accController = new func.AccountController();
        this.state = {
            allReactAccounts: [],
            idAccountName: 0,
            idAccountBalance: 0,
            idAccountType: "Chequing",
            selAcct: "Account not selected",  // on card click binds dep/with to account in question
            counter: 0    //resets state - rerender entire page
        }

    }
    handleSelectAccount = (name) => {

        this.setState({
            selAcct: name
        })
        
    }


    createClick = () => {

        console.log(this.state.idAccountName)
        console.log(this.state.idAccountBalance)
        this.accController.addAcct(this.state.idAccountName, this.state.idAccountType, this.state.idAccountBalance)
        this.setState({
            counter: 0
        });
        // console.log("new state 1: ", this.state);
        // console.log("is allAccounts actually pushed? ", this.accController.allAccounts);

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
        let bal = Number(e.target.value);
        this.setState({

            idAccountBalance: bal
        })
    }

    delete = () => {
        let position = this.accController.findAccount(this.state.selAcct);//gives position within acctcontroller array
        if (typeof (position) !== 'undefined') {
            this.accController.deleteAcct(position);
        this.setState({
            selAcct:""
        });
    }
}

    depositMoney = () => {
        let position = this.accController.findAccount(this.state.selAcct);//gives position within acctcontroller array
        if (typeof (position) !== 'undefined') {
            let deposit = document.getElementById("idAccountDeposit").value;
            console.log("position: ", position)
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
    }

    withdrawMoney = () => {
        let position = this.accController.findAccount(this.state.selAcct);
        if (typeof (position) !== 'undefined') {
            let withdraw = document.getElementById("idAccountWithdraw").value;
            console.log("Withdrawl money: ", withdraw);
            console.log(this.accController.allAccounts[position].withdrawal(Number(withdraw)))
            this.setState({
                //idAccountBalance: parseInt(this.state.idAccountBalance) - parseInt(withdraw)
                counter: 0            
            })
            console.log("amount has been withdrawn: ", this.state.idAccountBalance);
        }
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
           // let name = this.accController.allAccounts[i].name
            accs.push(<AccountCard 
                key={i} 
                selectAccount={this.handleSelectAccount} 
                name={this.accController.allAccounts[i].name}
                type={this.accController.allAccounts[i].type}
                balance={this.accController.allAccounts[i].balance} />);
        }
        
        return (
            <div>
                <div className="bankContainer">
                    <h2>React Migration</h2>
                    <h3>Account Controller</h3>
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








