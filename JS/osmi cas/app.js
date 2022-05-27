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
            joker2.push (i);
        } 
    }
    joker2.unshift (10, 20);
    return ("Prvi niz je " + joker1 + "\n" + "Drugi niz je " + joker2);
}

console.log (zajednickiNiz(DATA1, DATA2))


// FILTER() FUNKCIJA - PRAVLJENJE NIZA OD ELEMENATA KOJI SU ISPUNILI USLOVE

const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];
const result = words.filter ((value) => value [1] === "e")  // VALUE je index

console.log (result)


// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija 
// je duzina <= 6

const niz = words.filter ((value) => value.length <= 6)

console.log (niz)



// Napraviti novi niz koji filtrira postojeci i vraca novi sa parnim elementima.
const numbers = [2, 8, 9, 11, 26, 86, 85, 90, 102, 1003, 1120];

const parni = numbers.filter ((value) => value % 2 === 0)

console.log (parni)



// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima ciji je tip "boolean".
const booleans = [true, false, true, false];

const aaa = parni.concat(booleans).filter((value) => typeof value === "boolean");

console.log(aaa) 