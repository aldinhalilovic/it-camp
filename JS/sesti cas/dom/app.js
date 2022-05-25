 
// function pomnozi (prviBr, drugiBr, treciBr)  {
//     let prviBr = prompt ("Unesi prvi broj")
//     let drugiBr = prompt ("Unesi drugi broj")
//     let treciBr = prompt ("Unesi treci broj")
//     return prviBr * drugiBr * treciBr
// }

// pomnozi (1, 3, 5)


// function pomnozi (a,b,c) {
//     a = prompt ("Unesi prvi broj")
//     b = prompt ("Unesi drugi broj")
//     c = prompt ("Unesi treci broj")
//     return a*b*c
// }

// let proizovd = (pomnozi())
// console.log (proizovd)


let broj = 1
let okretanje  = prompt ("Unesi broj okretanja")
for ( let i = 0; i<okretanje; i++) {
    broj =  prompt ("Unesi broj") * broj;
}

function mnozenje () {
    return  broj 
}


let rezultat = (mnozenje())
console.log (rezultat)

