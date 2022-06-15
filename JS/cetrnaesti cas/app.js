// num % parseInt(num) === 0  IZBACUJE DECIMALNI BROJ IZ NIZA

// Object.freeze(person);     NE MOZE DA SE MENJA NIZ 
// Object.keys(person);        IZBACUJE NAM NIZ KLJUCEVA IZ NIZA
// Object.values(person);       IZBACUJE NAM NIZ VREDNOSTI IZ NIZA
// person.phone = "3816463930";            UBACILI SMO JOS JEDAN PROPERTY U NIZ
// Oject.seal(person);        ZATVORI SE OBJEKAT, NE MOZE NISTA DA SE UBACI U NJEGA, MOZE DA SE MENJA VALUE NEKOG KLJUCA
// console.log(Object.keys(person));
// console.log(Object.values(person));

// Object.seal(person);

// person.name = "neko drugi";   OVO MOZE ZBOG SEAL-A
// person.mentor = "treci neko";   OVO NE MOZE ZBOG SEAL-A
// console.log(person)


// const person =  {
//     name: "John Doe",
//     age: 48,
//     job: "Employed",
//     adress: "USA",
//     kids: 4,
// };


// const person2 =  {
//     name: "John Doe",
//     age: 48,
//     job: "Employed",
//     adress: "USA",
//     kids: 4,
// };

// // OBJECT.IS proverava nizove

// // console.log(Object.is(person, person2))   // FALSE, isti su po vrednostima, ali nemaju istu lokaciju bla bla lba

// const person3 = person2;   // ovde vracaju true, jer su iste stvari





// const names = ["faris", "aldin", "senad", "dzenan", "sabina"];

// const newNames = ["isko", ...names, "hamza"];

// console.log(names);

// console.log(newNames);

// //  ... SPREDOPERATOR KOPIRA NIZ

// const numbers = [1, 2, 3, 1, 5, 2, 7, 10];

// // const nemaDuplih = new Set(numbers);

// // console.log(nemaDuplih);

// const nemaDuplih = [...new Set(numbers)];

// console.log(nemaDuplih);


const person = {
    name: "John",
    adress: "USA",
};

const extendedPerson = {
    ...person,
    phone: "38163445566",
    age: 32,
    adress: "NY St 8."
}

console.log(extendedPerson);


const movies = [
    {title: "Movie1", rating: 8, budget: "230M"},
    {title: "Movie2", rating: 5, budget: "30M"},
    {title: "Movie3", rating: 9, budget: "530M"},
    {title: "Movie4", rating: 4, budget: "200M"},
    {title: "Movie5", rating: 9.5, budget: "120M"},
];

const newMoviesArray = movies.map((movie) => {
    return {
        title: movies.title,
        budget: movies.budget,
    };
});