import functions from './citiesLogic'

test('Check the city class', () => {

    const newCity = new functions.city(1, "Bobsville", 13, 15, 1000)

    expect(newCity.name).toBe("Bobsville");
    expect(newCity.population).toBe(1000);
    expect(newCity.latitude).toBe(13);
    expect(newCity.longitude).toBe(15);
    newCity.movedIn(1000);
    expect(newCity.population).toBe(2000);
    newCity.movedOut(500);
    expect(newCity.population).toBe(1500);
    expect(newCity.howBig()).toBe("Town");
    newCity.movedOut(1402);
    expect(newCity.howBig()).toBe("Hamlet");
    newCity.movedIn(20501);
    expect(newCity.howBig()).toBe("Large Town");
    const secondCity = new functions.city(2, "Tisdale", 167, 16, 100002)
    expect(secondCity.howBig()).toBe("City");
    expect(secondCity.show()).toBe("Tisdale has 100002 people at position 167/16");
});

