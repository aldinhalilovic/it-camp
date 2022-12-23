// zadatak
// 1. pomocni niz, sacinjen od oba niza
// 2. iz tog niza uzeti paran broj
// 3. u drugom nizu da se ubace 10 i 20
// funkcija vraca 2. i 3.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const zajednickiNiz = (arr1, arr2) => {
  const joker1 = arr1.concat(arr2);
  let joker2 = [];
  for (let i of joker1) {
    if (i % 2 === 0) {
      joker2.push(i);
    }
  }
  joker2.unshift(10, 20);
  return "Prvi niz je " + joker1 + "\n" + "Drugi niz je " + joker2;
};

console.log(zajednickiNiz(DATA1, DATA2));

// FILTER() FUNKCIJA - PRAVLJENJE NIZA OD ELEMENATA KOJI SU ISPUNILI USLOVE

const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];
const result = words.filter((value) => value[1] === "e"); // VALUE je index

console.log(result);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija
// je duzina <= 6

const niz = words.filter((value) => value.length <= 6);

console.log(niz);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa parnim elementima.
const numbers = [2, 8, 9, 11, 26, 86, 85, 90, 102, 1003, 1120];

const parni = numbers.filter((value) => value % 2 === 0);

console.log(parni);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima ciji je tip "boolean".
const booleans = [true, false, true, false];

const aaa = parni
  .concat(booleans)
  .filter((value) => typeof value === "boolean");

console.log(aaa);

// map() funkcija, namenjena za pravljenje novog niza uz dodatne izmene.

// da se napravi novi niz koji sadrzi kvadrate elemenata postojeceg niza

const brojevi1 = [2, 5, 10, 3, 4, 8];

const square = brojevi1.map((value) => value * value);

console.log(square);

// napraviti niz koji sadrzi kvadratne korene postojeceg niza

const root = square.map((value) => Math.sqrt(value));

console.log(root);

// objasnjenje funkcije:
//  const root2 = square.map((value, index, array) => {
// console.log ("Prvi argument: ", value); //vrednost elementa
//     console.log ("Drugi argument: ", index); // Index u nizu
//     console.log ("Treci argument: ", array); // Ceo nizz
//     return
// });

const brojevi2 = [2, 5, 3, 1, 10, 8, 7];

// kvadrirati brojeve koji imaju index 0,3,5;
const square2 = brojevi2.map((value, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return value * value;
  } else {
    return value;
  }
});

console.log(square2);

// Zadatak. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
// value > 2 => value * 7
// value >2 and value <8 => (value*4)/2
// Ostale vrednosti da ne uzima u obzir
// I na kraju treba novi niz vratiti sa godinama <10.

const DATA11 = [1, 3, 4, 2, 7, 6];
const godineVezba = (ages) => {
  let newAge = ages.map((value) => {
    if (value > 2 && value < 8) {
      return (value * 4) / 2;
    } else if (value > 2) {
      return value * 7;
    }
  });

  let newAge2 = newAge.filter((value) => value < 10);
  return newAge2;
};

console.log(godineVezba(DATA11));
