import React from 'react';
import City from './citiesCard';
import func from '../../business/citiesLogic';

class Cities extends React.Component {

    constructor() {
        super();
        this.state = {
            cityName: 0,
            population: 0,
            latitude: 0,
            longitude: 0,
        }
    }

    getCityName = (e) => {
        console.log(e.target.value)
        this.setState({
            cityName: e.target.value
        })
    }
    getPopulation = (e) => {
        let pop = Number(e.target.value);
        console.log(e.target.value)
        this.setState({
            population: pop
        })
    }
    getLatitude = (e) => {
        let lat = Number(e.target.value);
        console.log(e.target.value)
        this.setState({
            latitude: lat
        })
    }
    getLongitude = (e) => {
        let long = Number(e.target.value);
        console.log(e.target.value)
        this.setState({
            longitude: long
        })
    }
    render() {

        return (
            <div>
                <div className="bankContainer">
                    <h2>City Migration</h2>
                    <h3>Community</h3>
                    <input id="idCityName" onChange={this.getCityName} placeholder="City Name input"></input>
                    <br />
                    <input id="idPopulation" type="number" onChange={this.getPopulation} placeholder="Population input"></input><br />
                    <input id="idLatitude" type="number" onChange={this.getLatitude} placeholder="Latitude input"></input>
                    <br />
                    <input id="idLongitude" type="number" onChange={this.getLongitude} placeholder="Longitude input"></input><br />
                    <button onClick={this.createCity}>Create City</button><br /><br />
                    <City cityName="Calgary" lat="3" long="4" type="Hamlet"pop="100000" />
                </div>
            </div>
        );
    };
}


export default Cities;




