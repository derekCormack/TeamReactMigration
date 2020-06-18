import React, { Component} from 'react';
import func from '../../business/citiesLogic';

class City extends Component {
    
    render() {
        const {cityName,lat,long,pop,type} = this.props;
        return (
                <div className="card">
                    <p>Hello</p>
                    <p > City: {cityName}</p>
                    <p > Population: {pop}</p>
                    <p > Type: {type}</p>
                    <p > Latitude: {lat}</p>
                    <p > Logitude: {long}</p>
                </div>
        );
    }
};

export default City;