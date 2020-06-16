import React from 'react';

function Account(props) {
    return (
            <div className="card" onClick={props.selectAccount} id={props.name}>
            {/* <div id={props.value.type} className="card" onClick={props.selectAccount}> */}
            <p > Account: {props.name}</p>
            <p > Type: {props.type}</p>
            <p > Balance: {props.balance}</p>
             </div>
    );
};

export default Account;