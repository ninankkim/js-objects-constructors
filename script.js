// const animal = {
//     name: "Nelson",
//     dob: new Date (2017, 05, 16),
//     species: 'Dog'
// }

// console.log(animal);

function Animal (name, dob, species) {
    this.name = name;
    this.dog = dob;
    this.species = species;
}

Animal.prototype.speak = function() {
    console.log(`Hello, my name is ${this.name}`);
}

// const nelson = new Animal('Nelson', new Date (2017, 05, 16), 'Dog');

const theFarm = [
    new Animal ('Nelson', new Date (2017, 05, 16), 'Dog'),
    new Animal ('Emmy', new Date(2020, 02, 01), 'Dog'),
    new Animal ('Fish', new Date(2020, 8, 1), 'Fish'),
    new Animal ('Atom', new Date(2013, 9, 1), 'Cat')
]
// console.log(theFarm);

// const first = theFarm[0];

// for (let key in first) {
// // console.log(key);
//     const value = first[key];
//     console.log(`${key}: ${value}`);
// }


theFarm.forEach((animal) => {
    for (let key in animal) {
        const value = animal[key];
        console.log(`${key}: ${value}`);
    }
});

