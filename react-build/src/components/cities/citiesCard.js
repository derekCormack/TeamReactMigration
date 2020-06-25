import React, { Component} from 'react';
import styles from './cities.module.css';

class City extends Component {
    
    render() {
        const {cityName,lat,long,pop,type} = this.props;
        return (
                <div className={styles.dblock} > <div className={ styles.card } onClick={() => this.props.selectCity(cityName)}>
                    <p >  {type} of <b> {cityName} </b></p>  
                    <p >  Population: <b> {pop} </b></p>
                    <p >  Latitude: <b> {lat} </b></p>
                    <p >  Longitude: <b> {long} </b></p>
                </div>
                </div>
        );
    }
};

export default City;