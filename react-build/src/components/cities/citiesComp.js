import React from 'react';

class Cities extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const {cityName,cityType,lat,long} = this.props;
        return (
            <div>
             <div>
                    {/* <div id={props.value.type} className="card" onClick={props.selectAccount}> */}
                    <p > City: {cityName}</p>
                    <p > Type: {cityType}</p>
                    <p > Latitude: {lat}</p>
                    <p > Logitude: {lat}</p>
            </div>
        );
    }
}


export default Cities;

    
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



