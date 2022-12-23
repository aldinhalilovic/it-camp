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

// movies[1].gledao = "Ne";
// console.log(movies)

// const newMoviesArray = movies.map((movie) => {
//     return {
//         title: movie.title,
//         budget: movie.budget,
//         rankovi: movie.rating,
//     };
// });

// console.log(newMoviesArray)

// ASYNC JAVASCRIPT DA SE PROVEZBA MALO;

// posao = new Promise((resolve, reject) => {
//     response = 500;

//     for (let i = 0; i <900000000; i++) {}
//     if(response === 500) {
//         resolve([5,6,7,8,9]);
//     } else {
//         reject([1,2,3,4]);
//     }
// });

// posao.then((data) => {
//     console.log("uspenso povukao podatke",data );
//     arr = data.filter((el) => el % 2 ===0);
//     return arr
// })

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// const getUsers = async () => {
//     const response = await fetch(`${BASE_URL}/users`);      // UVEK SE PISE CONST, AWAIT CUVAMO U VARIJABLU UVEK
//     const posts = await response.json();
//     return posts ;
// };

// getUsers().then((el) => console.log(el));

// getUsers().then((users) => {
//     const newUsers = users.map((el) => {
//         return {
//             name: el.name,
//             username: el.username,
//             phone: el.phone,
//         };
//     });
//     console.log(newUsers);

// })

// const movies = [
//     {title: "Movie1", rating: 8, budget: "230M"},
//     {title: "Movie2", rating: 5, budget: "30M"},
//     {title: "Movie3", rating: 9, budget: "530M"},
//     {title: "Movie4", rating: 4, budget: "200M"},
//     {title: "Movie5", rating: 9.5, budget: "120M"},
// ];

// console.log(movies);

// const rating = movies.map((el) => {
//     return {
//         ratings : el.rating,
//     }
// })

// console.log(rating)

// newArr = [1,2,3,4,5,6]

// console.log(newArr[-1]);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// const arr = [
//   1, 23, 12, 312, 3, 123, 3, 4, 5, 6, 5, 13, 12, 312, 423, 534, 4, 545, 6, 46,
//   45, 324, 234, 23, 312, 423, 534,
// ];

// const withoutDouble = (arr) => {
//   // let originals = [];

//   // arr.forEach((element) => {
//   //   if (element !== originals.find((el) => el === element)) {
//   //     originals.push(element);
//   //   }
//   // });
//   const uniqueEl = {};

//   arr.forEach((element) => {
//     if (!uniqueEl[element]) {
//       uniqueEl[element] = true;
//     }
//   });
//   return originals;
// };

////////////////////////////////////////////////////////////////////////////////////////////////////

const ime1 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const ime2 = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";

const reversing = (ime1, ime2) => {
  const firstNameReversed = ime1.split("").reverse().join("");
  const secondNameReversed = ime2.split("").reverse().join("");
  let reversed = "";
  if (ime1.length > ime2.length) {
    for (let i = 0; i < ime1.length; i++) {
      reversed += firstNameReversed[i];
      if (ime2[i]) {
        reversed += secondNameReversed[i];
      }
    }
  } else {
    for (let i = 0; i < ime2.length; i++) {
      reversed += ime2[i];
      if (ime1[i]) {
        reversed += ime1[i];
      }
    }
  }
  return reversed;
};
//   let finishedProduct = "";
//   let arrlen = {};
//   if (ime1.length > ime2.length) {
//     arrlen = {
//       numIteration: ime1.length,
//       longerArray: ime1,
//     };
//   } else {
//     arrlen = {
//       numIteration: ime2.length,
//       longerArray: ime2,
//     };
//   }

//   if (arrlen.longerArray === ime1) {
//     for (let i = arrlen.numIteration - 1; i >= 0; i--) {
//       finishedProduct += ime1[i];
//       if (ime2[i]) {
//         finishedProduct += ime2[i];
//       }
//     }
//   }
//   return finishedProduct;
// };

console.log(reversing(ime1, ime2));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(concatNames(ime1Reversed, ime2Reversed));
