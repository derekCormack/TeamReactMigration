import React from 'react';
import './bankborder.css';
// import { BootstrapTable} from 'react-bootstrap-table';
// import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


function Account(props) {
    return (
        <div className="card">
            <p> Account: {props.name}</p>
            <p> Balance: {props.balance}</p>
        </div>
    );
}
class Accounts extends React.Component {
    constructor() {
        super();
        this.state = {
            allAccounts: [<Account name="savings" balance="300" />,
            <Account name="chequing" balance="700" />],
            idAccountName: "",
            idAccountBalance: "",
        }
        //this.getAccountName = this.getAccountName.bind(this);
    }
    // componentDidMount: createClick = () => {
    //     let accountName = document.getElementById(idAccountName).value
    //     console.log(this.state.idAccountName)
    //     console.log(this.state.idAccountBalance)
        // this.setState({
        //     allAccounts: allAccounts.push(<Account name= {this.state.idAccountName} balance={this.state.idAccountBalance} />)
        // })
    // }
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
                    <button>deposit</button><br />
                    <span>enter amount to withdraw</span><br />
                    <button>withdraw</button><br /><br /><br />
                    <button>update balances above</button><br />
                    <span></span><br /><br />
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
//  5. dependendancy inversion pricinciple: parent should not be dependant of child!  child is indpendant.




 //  1. business logic first though testing.
 //  2.  Wireframe...html code.
//   3.  click listners conect html to business logic.Account
//   4.  iterate for functionality....business logic may fail here......

// Account components:    
// 1. createAcccountComp. (creates account ONLY, ), deleteAcctComp,witdrawAcctComp,depositAcctComp,updateAcctcomp all JScomp files.
// 2. transactionComponent.  (display to chose ,dep, with)






