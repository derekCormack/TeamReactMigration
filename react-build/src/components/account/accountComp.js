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
        this.state={
            allAccounts:[<Account name="savings" balance ="300"/>,
            <Account name="chequing" balance ="700"/>]
        }
       }
createClick =() => {
    // console.log(document.getElementbyId("idAccountName").value)
    console.log(idAccountName.value)
}

    render() {
    return (
    <div >
        <div className="bankContainer">
         <h1>------hello world------</h1>   
         <input id="idAccountName" placeholder = "Account Name input"></input>
         <br/>
         <input id="idAccountBalance" placeholder = "Account deposit"></input><br/>
         <button onClick={this.createClick}>Create account</button><br/>
         <br/><br/><br/>
         <span>choose account to delete?</span><br/>
         <button>delete account</button><br/>
         <span>enter amount to deposit</span><br/>
         <button>deposit</button><br/>
         <span>enter amount to withdraw</span><br/>
         <button>withdraw</button><br/><br/><br/>
         <button>update balances above</button><br/>
         <span></span><br/><br/>
         <button>view balance below: </button><br/>
        <span>total-highest-lowest</span><br/>
        <span>List of accounts</span><br/><br/>
        {this.state.allAccounts}
       </div>
     </div>
    );
}
}

export default Accounts;