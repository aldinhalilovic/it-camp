const cars = ["Bmw", "Audi", "Smart"];

//  funkcije za niz
//  dodavanje elemanata na kraj niza - PUSH

cars.push("Mercedes"); // moze vise stringova u jednoj funkciji da se dodaje, uvek se dodaje na poslednjem mestu
cars.push("Mini", "Vw");

//  brisanje poslednjeg clana - pop

// cars.pop()

// const zadnji = cars.pop()
// dodavanje na pocetak niza - unshift()

cars.unshift("Ford", "Kadilak"); // kadilak je 2. clan u nizu, a ford prvi

// Brisanje prvog clana niza - SHIFT()

cars.shift; // isto kao za pop, vazi da se doda poslednji clan varijabli
const shiftValue = cars.shift();

// obrni niz - reverse()

cars.reverse();

// spajanje dva niza - concat(niz)
const imena = ["faris", "isko", "aldin"];
const godinee = [20, 100, 50, 61, 200];
console.log(godinee);
const spojeniNiz = imena.concat(godinee);
// console.log(spojeniNiz);

// trazenje clana u nizu = find()

const trazenaVrednost = godinee.find((el) => el > 50 && el < 100);
console.log(trazenaVrednost);
// trazenje indexa u nizu = findIndex()

const trazeniIndeks = godinee.findIndex((el) => el < 100);
console.log(trazeniIndeks);

// console.log (cars);

// const godine = [12, 76, 26, 6, 23, 21, 29, 16];

// function returnAdults (ages) {
//     const adults = [];

//     for (age of ages) {
//         if (age >= 18) {
//             adults.push (age)
//         }
//     }

//     return adults;
// }

// console.log (returnAdults(godine))
