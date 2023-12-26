class Person {
    name;
    sex;

    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    inhabitants = [];

    addInhabitant(person) {
        this.inhabitants.push(person)
        return this
    } 
}

class House {
    flats = [];
    maxFlats;

    constructor(maxFlats) {
        this.maxFlats = maxFlats
    }

    addFlat(flat) {
        if (this.flats.length < this.maxFlats) {
            this.flats.push(flat)
        }
        else {
            console.log(`The house is full boss. Maximum flats is ${this.maxFlats}`)
        }
        return this
    }
}

const personeOne = new Person('Denys', 'male');
const personTwo = new Person('Oleksii', 'male');

const flatOne = new Flat;
const flatTwo = new Flat;

flatOne.addInhabitant(personeOne);
flatTwo.addInhabitant(personTwo);

const jsBoysHouse = new House(2);
jsBoysHouse.addFlat(flatOne).addFlat(flatTwo);

//перевірімо максимум квартир
const flatThree = new Flat;
jsBoysHouse.addFlat(flatThree);