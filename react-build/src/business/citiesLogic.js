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

export default {city};