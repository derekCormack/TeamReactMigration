import React from 'react';
import account from '../../business/account';


function Account(props) {
    return (
        <div className="card">
            <p> Account: {props.name}</p>
            <p> Balance: {props.balance}</p>
        </div>
    );
};

export default Account;