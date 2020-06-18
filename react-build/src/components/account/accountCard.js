import React, { Component} from 'react';

class Account extends Component {
    
    render() {
        const {name, type, balance} = this.props;
        return (
                <div className="card" onClick={() => this.props.selectAccount(name)}>
                    {/* <div id={props.value.type} className="card" onClick={props.selectAccount}> */}
                    <p > Account: {name}</p>
                    <p > Type: {type}</p>
                    <p > Balance: {balance}</p>
                </div>
        );
    }
};

export default Account;