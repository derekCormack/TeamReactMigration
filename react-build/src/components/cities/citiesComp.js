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
            popChange:0,
            counter: 0
        }
    }

    getCityName = (e) => {
        this.setState({ cityName: e.target.value })
    }
    getPopulation = (e) => {
        const pop = Number(e.target.value);
        this.setState({ population: pop })
     }
    getLatitude = (e) => {
        const lat = Number(e.target.value);
        this.setState({ latitude: lat })
    }
    getLongitude = (e) => {
        this.setState ({ longitude:  Number(e.target.value) })  
    }
    createCity = () => {
        this.community.createCity(this.state.cityName, this.state.latitude, this.state.longitude, this.state.population,)
        this.setState({ counter: 0 })
    }
    handleSelectCity = (name) => {
        this.setState({ selectedCity: name })
    }
    moveInOut = () => {
        let cityKey = this.community.getKeyFromName(this.state.selectedCity);//gives position within acctcontroller array
        let keyPosition = this.community.keyPosition(cityKey);
        let populationChange = document.getElementById("popChange").value;
        this.community.citiesArray[keyPosition].movedIn(Number(populationChange))
        this.setState({ counter: 0 })  
    }
    deleteCity = () => {
        let cityKey = this.community.getKeyFromName(this.state.selectedCity);//gives position within acctcontroller array
        this.community.deleteCity(cityKey)
        this.setState({ selectedCity: "City not selected" })
    }
    
    render() {
        const northern = this.community.getMostNothern();
        const southern = this.community.getMostSouthern();
        const totalPop = this.community.getPopulation();
        const allCards = [];
       
        for (var i = 0; i < this.community.citiesArray.length; i++) {
            // let name = this.accController.allAccounts[i].name
            allCards.push(<City
                key={i}
                selectCity={this.handleSelectCity}
                cityName={this.community.citiesArray[i].name}
                lat={this.community.citiesArray[i].latitude}
                long={this.community.citiesArray[i].longitude}
                pop={this.community.citiesArray[i].population}
                type={this.community.citiesArray[i].howBig()} />);
        }
        return (
            <div>
                <div className="bankContainer">
                    <h2>City Migration</h2>
                    <h3>Community</h3>

                    City Name:  <input id="idCityName" onChange={this.getCityName} placeholder="City Name input"></input><br />
                    Population: <input id="idPopulation" type="number" onChange={this.getPopulation} placeholder="Population input"></input><br />
                    Latitude:   <input id="idLatitude" type="number" onChange={this.getLatitude} placeholder="Latitude input"></input><br />
                    Longitude:  <input id="idLongitude" type="number" onChange={this.getLongitude} placeholder="Longitude input"></input><br />
                    <button onClick={this.createCity}>Create City</button><br /><br />

                    <p className="currentCity">Selected City: {this.state.selectedCity}<br /><br /></p>

                    <button onClick={this.deleteCity}>delete account</button><br /><br />
                    <input id="popChange" type="number" placeholder="Population Change"></input>
                    <button onClick={this.moveInOut}>Move in/out</button><br /><br />
                    
                    <span className="currentAccount">Northern most city: {northern} </span><br />
                    <span className="currentAccount">Southern most city: {southern} </span><br />
                    <span className="currentAccount">Global Population: {totalPop} </span><br />
                        
                    {allCards}
                </div>
            </div>
        );
    };
}


export default Cities;




