import React from 'react';
import City from './citiesCard';
import func from '../../business/citiesLogic';

class Cities extends React.Component {

    constructor() {
        super();
        this.community=new func.community()
        this.state = {
            cityName: 0,
            population: 0,
            latitude: 0,
            longitude: 0,
            counter:0
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
        console.log(this.state.cityName)
        console.log(this.state.population)
        console.log(this.state.latitude)
        console.log(this.state.longitude)

        this.community.createCity(this.state.cityName, this.state.population, this.state.latitude,this.state.longitude)
        // this.setState({
        //     counter: 0
        // });
        console.log(this.community.citiesArray[0])
        this.setState({
            counter: 0
        })

    }
    render() {
        const allCards = [];
        for (var i = 0; i < this.community.citiesArray.length; i++) {
            // let name = this.accController.allAccounts[i].name
            allCards.push(<City 
                 key={i} 
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
                    {allCards}
                </div>
            </div>
        );
    };
}


export default Cities;




