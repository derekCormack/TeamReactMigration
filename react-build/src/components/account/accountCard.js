import React from 'react';

function Account(props) {
    return (
            <div className="card" onClick={() => props.selectAccount}>
            {/* <div id={props.value.type} className="card" onClick={props.selectAccount}> */}
            <div><p> Account: {props.name}</p>
            <p> Type: {props.type}</p>
            <p> Balance: {props.balance}</p>
            </div>
        </div>
    );
};

export default Account;