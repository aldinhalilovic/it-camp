

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

const brojevi = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

parni = brojevi.map((el) => el % 2 ===0);

console.log(parni);


