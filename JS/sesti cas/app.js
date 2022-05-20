// function saberi_tri_pet() {
//     const zbir = 3 + 5;
//     return zbir;
// }

// const zbir_tri_pet = saberi_tri_pet
// console.log (zbir_tri_pet())

// const arrowFunc = () => {
//     // funkcija
// }

// function saberi(a,b) {
//     return a + b;
// }

// console.log (saberi( 10, 15));

// function pozdrav() {
//     alert ("Pozdrav Korisnice")
// }

// pozdrav()

// function pozdrav(ime) {
//     alert ("Pozdrav" + "" + ime)
// }

// pozdrav("Isko")


// function inchToCm(inch) {
//     return inch * 2.54
// }

// const visina = inchToCm(25);

// console.log(visina);


const inchToCm = (inch) => inch * 2.54;

console.log (inchToCm(10))

const saberi = (a,b) => a + b

console.log (saberi(10,3))

const ime = "faris"                           //GLOBALNI SCOPE

function nekaFunkcija () {
    const ime = "aldin";                      //LOKALNI SCOPE
    console.log(ime) 
}

nekaFunkcija()


function sabiraj (prvi, drugi, treci = false ) {
    if (treci) {
        return prvi + drugi + treci;
    } else {
        return prvi + drugi
    }
}

console.log (sabiraj(2,2,5))



// da se unesu 3 broja, da se pomnoze sva 3 , resenje u alert da izadje korisniku
// pozeljna petlja da se iskoristi, da se provezba
// KORAK VISE, unese broj brojeva koliko hoces da mnozis, zatim sve te brojeve da pomnozis