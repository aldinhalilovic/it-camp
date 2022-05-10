
// LET i CONST;

// const je konstantna varijabla, nema vise da se menja

// const ime = "Max" 

// ime = "Isko"     //ovo ne radi nista

// let godine = 30

// console.log ( ime + " " + godine )

// godine = 24

// console.log ( ime + " " + godine)


// console.log ( 5===5 )    // uvek 3 put =, proverava jednakost leve i desne strane po tipu i vrednosti

// console.log ( 5 !== 6)  // proverava razliku, da li je leva strana razlicita od desne

// console.log ( 6>5 )     // uporedjivanje stvari, da li je manje vece/ manje ili jednaka / veca ili jednako

// const ime = "aldin"
// const godine = 40
// const meseci = godine * 12
// 
// console.log (meseci)

// const ime = prompt ("unesi ime") 
// const godine = prompt ("unesi broj godina")

// alert ("ziveo si" + godine * 12 + " meseci")

// let age = 20;
// console.log (++age) // ++ pre varijable dodaje za 1 pa onda printa, ++ posle varijable printa, pa za sledeci console log printa sabiranje

// const age = "Nesto"

// if (age >= 18) {
//     console.log ("Punoletan si")
// }

// else if (age < 18) {
//     console.log ("Nisi punoletan")
// }

// else {
//     console.log("Izvrsava se samo u slucaju kada ni jedan uslov nije zadovoljen")
// }


// const age = prompt ("Unesi tvoje godine")

// if (+age === 18) {
//     console.log ("Tek si postao punoletan")
// }
// else if (+age > 18) {
//     console.log("Ti si odrastao")
// }
// else if (+age > 12) {
//     console.log("Ti si tinejdzer")
// }

// else {
//     console.log ("Ti si dete")
// }

// const a = 4
// const b = false

// console.log( a && b)            && uslov ako su i levo i desno true , onda daje true, ostalo nista

// const a = 5
// const b = 4
// const c = 0

// console.log (a && b && c)  AND operator

// const a = 4
// const b = false;

// console.log ( a || b)    || predstavlja proveru da li je bilo sta tacno, i print-a prvog tacnog

// console.log (!4);             ! predstavlja negaciju, print-a suprotnost od true ili false  

console.log (5===5)
//proverava  nam jednakost leve i desne strane
console.log (4=="4")
// == nam proverava vrednost, ne i tip leve i desne strane
console.log ( 4!==5)
console.log ( 4!=="5")
// !== proverava razilicitost leve ili desne strane, nije bitan tip varijable,

console.log ( 4>5)    // false
console.log ( 4<5)   // true

// <,> vece manje, imamo i <=, >= manje ili jedanko/vece ili jednako

const ime =  ("Aldin")

// prompt nam puni varijablu,retko kad se koristi

console.log (ime)

let age = 30

console.log ( ++age)
// dodaje +1 na broj u varijabli, racuna odma i printa odma
console.log (age++)
// dodaje +1 na broj u varijabli, racuna, printa nakon sledeceg consol loga
console.log (age)

//const godine = prompt ("Unesi broj godina")

// if (godine > 20) {
//     console.log ("Ostarao si")
// }

// else if (godine <20) {
//     console.log ("Mlad si jos uvek")
// }


const a = 5
const b = 7

console.log ( a&&b)
// trazi obe da su true,ako jesu, printa vecu vrednost
console.log (a||b)
// trazi da je samo jedna true,prva koja naidje printa je
console.log (!a)
// negacija same varijable, ako je true, salje nam false, ako je false salje true....