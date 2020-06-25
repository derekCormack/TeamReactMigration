import React, { Component} from 'react';
import styles from './bankborder.module.css';

class Account extends Component {
    
    render() {
        const {name, type, balance} = this.props;
        return (
                <div className={styles.dblock}> <div className={styles.card} onClick={() => this.props.selectAccount(name)}>
                    {/* <div id={props.value.type} className="card" onClick={props.selectAccount}> */}
                    <p > Account: <b> {name} </b></p>
                    <p > Type: <b> {type} </b></p>
                    <p > Balance: <b> {balance} </b></p>
                </div>
                </div>
        );
    }
};

export default Account;