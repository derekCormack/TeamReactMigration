class city {

    constructor(key, name, latitude, longitude, population) {

        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.key = key
    }
    //to sort k = data.sort((a,b) => {return b.key -a.key});
    // if (data.status ===200) {
    //         return DataCue;
    // } return 'SERVER ERROR':
    //     }
    show() {
        return this.name + " has " + this.population + " people at position " + this.latitude + "/" + this.longitude;
    }
    movedIn(num) {
        this.population = this.population + num;
    }
    movedOut(num) {
        this.population = this.population - num;
    }
    howBig() {

        if (this.population < 101) return "Hamlet";
        if (this.population < 1001) return "Village";
        if (this.population < 20001) return "Town";
        if (this.population < 100001) return "Large Town";
        return "City";
    }

}
class community {

    constructor() {
        this.citiesArray = [];
        this.counter = 1
    }
    fromserver(array) {
        for (let i = 0; i < array.length; i++) {
            this.counter=array[i].key;
            this.createCity(array[i].name, array[i].latitude, array[i].longitude, array[i].population);
         }
    }
    createCity(name, latitude, longitude, population) {
        let cityKey = this.counter++
        this.citiesArray.push(new city(cityKey, name, latitude, longitude, population))
        // let AAA= new city(cityKey, name, latitude, longitude, population);
        // this.citiesArray[cityKey]=AAA;
        return this.citiesArray[this.keyPosition(cityKey)]
    }
    getKeyFromName(name) {
        for (let i = 0; i < this.citiesArray.length; i++) {
            if (name == this.citiesArray[i].name) {
                return this.citiesArray[i].key
            }
        }
    }
    keyPosition(theKey) {

        for (let i = 0; i < this.citiesArray.length; i++) {
            if (theKey == this.citiesArray[i].key) {
                return i
            }
        }
    }
    deleteCity(key) {
        // delete this.citiesArray[key];
        this.citiesArray.splice(this.keyPosition(key), 1);
    }
    whichSphere(name) {
        if (this.citiesArray[this.keyPosition(name)].latitude > 0) {
            return "Northern Hemisphere"
        }
        if (this.citiesArray[this.keyPosition(name)].latitude < 0) {
            return "Southern Hemisphere"
        }
        return "You are on the Equator"
    }
    getMostNothern() {
        let N = -91
        let I = ""
        for (let i = 0; i < this.citiesArray.length; i++) {
            if (this.citiesArray[i].latitude > N) {
                N = this.citiesArray[i].latitude
                I = i
            }
        }
        return this.citiesArray[I].name
    }
    getMostSouthern() {
        let S = 91
        let I = ""
        for (let i = 0; i < this.citiesArray.length; i++) {
            if (this.citiesArray[i].latitude < S) {
                S = this.citiesArray[i].latitude
                I = i
            }
        }
        return this.citiesArray[I].name
    }
    getPopulation() {
        let total = 0
        for (let i = 0; i < this.citiesArray.length; i++) {
            total = total + this.citiesArray[i].population
        }
        return total
    }
}
export default {city, community};