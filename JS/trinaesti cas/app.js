// const students = [
//     {name: "Faris", grade: 8, year: 2 },
//     {name: "Isko", grade: 10, year: 4 },
//     {name: "Aldin", grade: 8, year: 2 },
//     {name: "Amina", grade: 9, year: 4 },
//     {name: "Sabina", grade: 9, year: 3 },
//     {name: "Denis", grade: 7, year: 4 },
//     {name: "Senad", grade: 6, year: 1 },
// ];

// function getAvgGrade(array) {
//     const grades = array.map((el) => el.grade);
//     console.log(grades);
//     const mid = grades.reduce((prev,curr) => prev + curr) / grades.length;
//     console.log(mid.toFixed(2));
//     return +mid.toFixed(2);
// };

// console.log(getAvgGrade(students));


// CALL funkcija vezana za objekte i this funkcije

const person = {
    name: "John Doe",
    age: 22,
}

function sayHello() {
    console.log (`Hello ${this.name}`);
};

sayHello.call(person);

let hrana = { food: "Pizza"};

function favFood (text, rating) {
    return `${this.food} ${text} ${rating}`;
}

console.log(favFood.call(hrana, "je ukusna", 5)); // CALL UBACUJEMO SVAKI ARGUMENT POSEBNO, KAO STRINGOVI, APPLY UBACUJEMO ARGUMENTE U NIZOVE, PA UBACUJEMO SAM TAJ NIZ
// U CALL IMAMO KOLIKO HOCETE ARGUMENATA, U APPLY SAMO 2: OBJEKAT I NIZ
console.log(favFood.apply(hrana, ["nije ukusna", 4])) // APPLY UBACUJEMO ARGUMENTE U NIZ, PA NIZ UBACUJEMO;

const bindFunc = favFood.bind(hrana);

console.log(bindFunc("nije nesto", 3)); // BIND VRACA FUNCKIJU, TJ NEKOJ VARIJABLI DAJES FUNKCIJU

const ime = "John doe";
const zanimanje = "ubica";
const godine = 40;

console.log(`${ime} je ${zanimanje}, i ima ${godine} godina.`)

// ${VARIJABLA}  ` OTVARA NAM STRINGOVE, I MOZEMO DA PRISTUPAMO VARIJABLAMA.


const nummerAray = [10, 20, 30, 40, 100, 400, 1000];

console.log(Math.max.apply(null, nummerAray));
