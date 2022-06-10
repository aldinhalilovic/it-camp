const car = {   
    make: "Volkswagen",
    model: " Golf 7",
    maxSpeed: 220,
    currentspeed: 0,
    drive: function(value) {
        if(this.currentspeed + value > this.maxSpeed) {
            alert("Ne moze ovo ovako");
        } else {
            this.currentspeed += value;
        }
    },
    brake: function(value) {
        this.currentspeed -= value;
    },
    stop: function() {
        this.currentspeed = 0;
    },
}


car.drive(180);
console.log(car)
car.drive(41);
console.log(car);

// menjali, da dodajemo drive za 20, brake zq 10, stop da bude 0
// onda smo ubacili value u funkcije, da dodaje za value, i da brake za value current speed
// na kraju smo uradili da ako prelazi max speed, izbaci alert, i vrati manju brzinu 


//         FREE CODE CAMP
