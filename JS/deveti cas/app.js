// // MAP
// const DATA = [ 100, 65, 76, 80, 99, 53, 1, 2];
// const returnEven = (numbers) => {
//     const evenNumbers = numbers.filter((num) => num % 2 === 0);

//     const lessThan50 = evenNumbers.filter((el) => el <=50);

//     return lessThan50;
// }

// console.log(returnEven(DATA))


// const DATA = [ 100, 65, 76, 80, 99, 53, 1, 2, 44, 32];
// const returnEven = (numbers) => {
//     return evenNumbers = numbers.filter((num) => num % 2 === 0 && num <=50);

// } 
// BRZA I LAKSA FUNKCIJA OD GORNJE
// console.log ( returnEven(DATA))

// const DATA = [ 5, 3, 2, 8, 7, 9];

// const returnPow = (numbers) => {
//     return (pow = numbers.map((el) => el * el + 10));
// };

// console.log(returnPow(DATA));


// REDUCE funkcija

// const DATA = [ 100, 200, 250, 400, 520];

// const cartTotal = DATA.reduce(
//     (previousValue, currentValue) => previousValue + currentValue, 30 //initaluValue pocetna vrednost,po defaultu nula
// );


// console.log(cartTotal)

const DATA  = [ 26, 18, 16, 22, 30, 28];
const sumAvgAge = (ages) => {
    const getAvarage = ages.reduce((previousValue, currentValue) => previousValue + currentValue) / ages.length;

    return parseFloat(getAvarage.toFixed(2))  // parseint da se zaokruzi ceo broj, isto kao +, parsefloat je decimale da se zaokruze;
};

console.log(sumAvgAge(DATA))

// SOME / EVERY

const nizzz = [ 2, 10, 17, 20, 26, 35];

const example1 = nizzz.every ((el) => el > 21);

console.log(example1)

const example2 = nizzz.some ((el) => el > 21);

console.log(example2);

// JOIN

const elements = ["air", "fire", "water"];

console.log(elements.join());

