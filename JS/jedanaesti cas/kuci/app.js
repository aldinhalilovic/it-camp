const myCar = {
    id: 1,
    mark: "Audi",
    model: "A3",
    color: "Black",
    power: "77kw",
    transmission: "manual",
    age: "2012",
    tyres: {
        mark: "Michelien",
        dot: "0419",
        width: "205",
        height: "55",
        radius: "R16",
        dimesionTyre: function() {
            return this.width + "/" + this.height + this.radius
        }
    },
    feler: "NO",
    fixPrice: "8000 euros",
};

console.log("Dimnezije gume su :", myCar.tyres.width + "/" + myCar.tyres.height + myCar.tyres.radius);

console.log(myCar.tyres.dimesionTyre());




const myProfile = {
    name: "Aldin",
    lastname: "Halilovic",
    fullname: function() {
        return this.name + " " + this.lastname;
    },
    yearBirth: 2003,
    dayBirth: "06.02",
    age: function() {
        return 2022 - this.yearBirth;
    },
    parents: [{
        name:"Fahrudin",
        lastname:"Halilovic",
        fullname: function() {
            return this.name + " " + this.lastname;
        }
    }, {
        name: "Alma",
        lastname: "Halilovic",
        fullname: function() {
            return this.name + " " + this.lastname;
        }
    }],

}

console.log(myProfile.age());
console.log(myProfile.fullname());
console.log(myProfile.parents[0].fullname());
console.log(myProfile.parents[1].fullname());
