// for petlja
// while
//do while

// for ( let i = 0; i<10 ; i+=2) {         i+=2    dodaje 2 na svaki broj
//     console.log (i)
// }


let suma = 0
for ( let i = 0; i<=15; i++) {
    if ( i % 2 !== 0) {
        suma = suma + i;
        // suma += i
    }
}
console.log ( suma)


let n = 20

while (n === 20) {
    console.log ("Unutar petlje")
    break;
}

// do {
//     radi nesto
// } while (uslov)


