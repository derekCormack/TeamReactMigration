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
                    {/* <div id={props.value.type} className="card" onClick={props.selectAccount}> */}
                    <p > City: {cityName}</p>
                    <p > Type: {cityType}</p>
                    <p > Latitude: {lat}</p>
                    <p > Logitude: {lat}</p>
            </div>
        );
    };
}


export default Cities;

 


