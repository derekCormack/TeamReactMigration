import React, { Component} from 'react';

class Account extends Component {
    
    handleClick = (name) => {
        this.props.selectAccount(name); 
        return; 
    }

    render() {
        const {name, type, balance} = this.props;
        return (
                <div className="card" onClick={() => this.handleClick(name)}>
                    {/* <div id={props.value.type} className="card" onClick={props.selectAccount}> */}
                    <p > Account: {name}</p>
                    <p > Type: {type}</p>
                    <p > Balance: {balance}</p>
                </div>
        );
    }
};

export default Account;