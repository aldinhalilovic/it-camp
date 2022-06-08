// OBJEKTI

const myCar = {
    id: 1,      // svkai objekat ima svoj ID sa cime radis
    marka: "Audi",   // marka je kljuc, audi je vrednost
    model: "A4",
    boja: "crvena",
    pogon: "prednji",
    menjac: "automatski",
    kontakt: ["06216902027", "020333222"],
    servis: {
        datum: "04.maj",
        km: 230000,
        serviser: "Pasovici",
    },
    udaran: true,
};
// kljuc je uglavnom jedna rec/kljuc od dve reci se pise dveReci ILI dve_reci


console.log(myCar);    // pozivanje celog objekta
// console.log("Moj auto je marke", myCar.marka);    //pozivanje odredjenog dela objekta
// console.log("Moj auto je marke", myCar["marka"])   //pozivanje 
console.log(myCar.servis.serviser);
console.log(myCar["servis"]["serviser"]);      // pozivanje vrednosti iz objekta pod objekta




const radnik = {
    first_name: "Bob",
    last_name: "Euroblok",
    age: 30,
    job: "Programer",
    adresa: "Avnoja BB",
    city: "Novi Pazar",
    contact: "062123321",
    radni_sati: 170,
    satnica: 20,
};

console.log("Radnik Bob Euroblok, radi kao programer, ima 30 godina, zivi u Novi Pazar, i prima platu ");
console.log("Radnik", radnik.first_name ,  radnik.last_name, ", radi kao", radnik.job, ", ima" , radnik.age, "godina. Prima platu ", radnik.radni_sati * radnik.satnica)

const employe = {
    ime: "Bob",
    prezime: "Euroblok",
    fullname: function() {
        return this.ime + " " +  this.prezime;         //THIS je deo funkcije,gde se odnosi samo na objekat u kojem se nalazi
    },
    adresa:{
        ulica: "Avnoja",
        broj: "bb",
        grad: "Novi Pazar",
        getAdress: function() {
            console.log(this);
        }
    }
};

console.log(employe.fullname());

employe.adresa.getAdress()

