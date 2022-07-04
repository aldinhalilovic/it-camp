

// // let godine = 15

// // switch(godine) {
// //     case  20:
// //         console.log ("Ima 20 godina")
// //         break;
// //     case 15:
// //         console.log ("Ima 15 godina")
// //         break;
// //     default:
// //         console.log ("Nije upao ni u jedan case")
// // }



// // const studenti = ["Zika", "Janko", "Sasa"];

// // studenti [8] = "Marko";

// // console.log(studenti.length)

// // console.log (studenti);

// // studenti.length = 2;
// // console.log(studenti);

// // studenti[0] = "Aldin";

// // console.log(studenti);

// const cars =  ["BMW", 4, undefined, "MB", "Skoda", null, NaN, false, true,]

// console.log(cars.length);

// // for (let i = 0; i < cars.length; i++){
// //     console.log (cars[i])
// // }


// // for (let i = 0; i < cars.length; i++){
// //     if( cars[i]) {
// //         console.log (cars[i])
// //     }
// // }

// for (let car in cars) {
//     console.log (cars[car])
// }

// function sabiraj (prvi, drugi, treci = false ) {
//     if (treci) {
//         return prvi + drugi + treci;
//     } else {
//         return prvi + drugi
//     }
// }

// console.log (sabiraj(2,2,5))




// function mnozenje () {
//     let broj = 1;
//     let okretanje  = prompt ("Unesi broj okretanja");
//     for ( let i = 0; i<okretanje; i++) {
//     broj *=  prompt ("Unesi broj") ;
//     };
//     return broj  
// }

// console.log(mnozenje());

// const brojevi = [1,2,5,6,7];

// console.log(brojevi.pop());

// console.log(brojevi.pop());


// const imena = ["faris", "isko", "aldin"];
// const godinee = [20, 100, 50, 61, 200];
// const spojeniNiz = imena.concat(godinee);
// console.log(spojeniNiz);

// console.log(godinee.findIndex((el) => el>30 && el<100));

// const ime = ["aldin", "adsidk", "alksfj"]

// const slovo = ime.filter((x) => x [3] === "i")

// console.log(slovo);

/*
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

DA SE POGLEDA OVAJ PRIMER SA MDN */

// const brojevi = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// parni = brojevi.map((el) => el % 2 ===0);

// console.log(parni);

// const ja = {
//     ime: "Aldin",
//     prezime : "Halilovic",
//     roditelji : {
//         otac : "Fahrudin",
//         majka : "Alma",
//     }
// };


// console.log(ja.roditelji);
 

// const students = [
//     {name: "Faris", grade: 8, year: 2 },
//     {name: "Isko", grade: 10, year: 4 },
//     {name: "Aldin", grade: 8, year: 2 },
//     {name: "Amina", grade: 9, year: 4 },
//     {name: "Sabina", grade: 9, year: 3 },
//     {name: "Denis", grade: 7, year: 4 },
//     {name: "Senad", grade: 6, year: 1 },
// ];

// console.log(students);

// function getAvgGrade(array) {
//     const grades = array.map((el) => el.grade);
//     console.log(grades);
//     const mid = grades.reduce((prev,curr) => prev + curr) / grades.length;
//     console.log(mid.toFixed(2));
//     return +mid.toFixed(2);
// };

// getAvgGrade(students);


// const nummerAray = [10, 20, 30, 40, 100, 400, 1000];

// console.log(Math.max.apply(null, nummerAray));

const movies = [
    {title: "Movie1", rating: 8, budget: "230M"},
    {title: "Movie2", rating: 5, budget: "30M"},
    {title: "Movie3", rating: 9, budget: "530M"},
    {title: "Movie4", rating: 4, budget: "200M"},
    {title: "Movie5", rating: 9.5, budget: "120M"},
];

movies[1].gledao = "Ne";
console.log(movies)

const newMoviesArray = movies.map((movie) => {
    return {
        title: movie.title,
        budget: movie.budget,
        rankovi: movie.rating,
    };
});

console.log(newMoviesArray)



// ASYNC JAVASCRIPT DA SE PROVEZBA MALO;

