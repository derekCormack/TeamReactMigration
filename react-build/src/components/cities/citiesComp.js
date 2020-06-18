import React from 'react';
import City from './citiesCard';
import func from '../../business/citiesLogic';

class Cities extends React.Component {

    constructor() {
        super();
        this.community = new func.community()
        this.state = {
            selectedCity: "City not selected",
            cityName: 0,
            population: 0,
            latitude: 0,
            longitude: 0,
            counter: 0
        }
    }

    getCityName = (e) => {
        this.setState({
            cityName: e.target.value
        })
    }
    getPopulation = (e) => {
        let pop = Number(e.target.value);
        this.setState({
            population: pop
        })
    }
    getLatitude = (e) => {
        let lat = Number(e.target.value);
        this.setState({
            latitude: lat
        })
    }
    getLongitude = (e) => {
        let long = Number(e.target.value);
        this.setState({
            longitude: long
        })
    }
    createCity = () => {
        this.community.createCity(this.state.cityName, this.state.population, this.state.latitude, this.state.longitude)
       // console.log(this.community.citiesArray[0])
        this.setState({
            counter: 0
        })

    }
    handleSelectCity = (name) => {
        this.setState({
            selectedCity: name
        })

    }
    deleteCity = () => {
        let positionInArray = this.accController.findAccount(this.state.selectedCity);//gives position within acctcontroller array
   
        //     if (typeof (position) !== 'undefined') {
    //         this.accController.deleteAcct(position);
    //     this.setState({
    //         selAcct:""
    //     });
    // }
}
    render() {
        const allCards = [];
        for (var i = 0; i < this.community.citiesArray.length; i++) {
            // let name = this.accController.allAccounts[i].name
            allCards.push(<City
                key={i}
                selectCity={this.handleSelectCity}
                cityName={this.community.citiesArray[i].name}
                lat={this.community.citiesArray[i].latitude}
                long={this.community.citiesArray[i].longitude}
                pop={this.community.citiesArray[i].population} />);
        }
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
                    <p className="currentCity">
                    Selected City: {this.state.selectedCity}<br /><br /></p>
                    <button onClick={this.deleteCity}>delete account</button><br />
                    {allCards}
                </div>
            </div>
        );
    };
}


export default Cities;




