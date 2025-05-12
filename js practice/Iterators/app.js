const animals = ['cat', 'dog', 'duck', 'cow', 'monkey', 'giraffe'];

const showAnimals =  animals.forEach(animal => {
    return animal;
});

// showAnimals;


// ###################################################################

const cities = ['Genova', 'Roma', 'Milano', 'La Spezia'];

const printCities = () => {
    for(let city in cities) {
        console.log(cities[city])
    }
}

// console.log(printCities());

// ###################################################################