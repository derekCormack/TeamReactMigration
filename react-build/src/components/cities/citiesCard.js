import React, { Component} from 'react';
import func from '../../business/citiesLogic';

class City extends Component {
    
    render() {
        const {cityName,lat,long,pop,type} = this.props;
        return (
                <div className="card" onClick={() => this.props.selectCity(cityName)}>
                    <p > {type} of {cityName}</p>
                    <p > Population: {pop}</p>
                    <p > Latitude: {lat}</p>
                    <p > Longitude: {long}</p>
                </div>
        );
    }
};

export default City;