const car = {
    mark: "Audi",
    make: "A3",
    age: 2012,
    transmison: "Manuel",
    tyres: "Summer",
    sizeEngine: "1598cm3",
    horsePower: 105
};

function myCar() {
    return `Posedujem ${this.make} modela ${this.mark}.
Gume imaju oznaku: ${this.tyres} sto znaci da su za leto samo.
Ima ${this.sizeEngine} i ${this.horsePower} konja,sto znaci da mi odgovara za probnu vozacku.`
};

// console.log(myCar.call(car));

// console.log(myCar.apply(car));

const myHotel = {
    name: "Residente",
    place: "Novi Pazar",
    adress: "Kej 37. Sandzacke Divizije",
    size: "6 floors",
    rooms: 40,
    comments : "",
};

function myComms(komentar, rate) {
    return (`${this.name} ${komentar} . Ocena je: ${rate} `);
}


// console.log(myComms.call(myHotel,`je odlican`, 10));



const cellPhoneNumbers = {
    yettel: `Yettel ima brojeve: ` ,
    mts : `Mts ima brojeve: `,
    vip : `Vip ima brojeve: `,
}

function addNumY(numms) {
   return (this.yettel + numms);
};

function addNumM(numms) {
    return (this.mts + numms);
}

function addNumV(numms) {
    return (this.vip + numms);
}

addNumY.apply(cellPhoneNumbers,[`062, 063, 069`]);
addNumM.apply(cellPhoneNumbers,[`064, 065, 066`]);
addNumV.apply(cellPhoneNumbers,[`061, 067`]);

const bindfncY = addNumY.bind(cellPhoneNumbers);
const bindfncM = addNumM.bind(cellPhoneNumbers);
const bindfncV = addNumV.bind(cellPhoneNumbers);

console.log(bindfncY(`062, 063, 069`));
console.log(bindfncM(`064, 065, 066`));
console.log(bindfncV(`061, 067`));

