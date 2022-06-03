// var1 = [34, true, "hello", false, 45, 23];

// SLICE   .slice(0,3)  uzima se deo niza od 0 do 3 index, kopira

// var2 = var1.slice(0, 3);

// splice    .splice(0,1)  brise se prvi i drugi clan  , u zagradi su indexi

//  OD 0 DO 1 CLANA, ZATIM MOZE DA SE PISE STA MOZEMO DA UBACUJEMO U NIZ

niz = [ 2, 6, 15 , 23, 47 , 18 , 73, 92, 105, 2011];

sumaEl = 0

for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 === 0) {
        sumaEl += niz[i];
    }
}

console.log("Suma je", sumaEl); 

