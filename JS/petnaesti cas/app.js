// function nekiPosao() {
//     console.log("Pocetak posla");
//     for (let index = 0; index < 990000000; index++) {}

//     console.log("kraj posla");
// }

// nekiPosao()

// JSV9000.APP



// function arrayMap(arr,clback) {
//     res = [];
//     for (let i = 0; i < arr.length; i++) {
//         newEl = clback(arr[i]);
//         res.push(newEl);
//     }
//     return res;
// };

// myfunc = function(arg1) {
//     return arg1 * 2;
// };



// // console.log(arrayMap([2,4,5,6],myfunc));


// posao = new Promise((resolve, reject) => {
//     response = 500;

//     for (let i = 0; i <900000000; i++) {}
//     if(response === 500) {
//         resolve([5,6,7,8,9]);
//     } else {
//         reject([1,2,3,4]);
//     }
// });

// posao.then((data) => {
//     console.log("uspenso povukao podatke",data );
//     arr = data.filter((el) => el % 2 ===0);
//     return arr
// })
// .then((arg2) => {
//     console.log(arg2.map((el) => el * 2))
// })
// .catch((err) => {
//     console.log("Neuspesno povukao podatke", err);
// })



// p = new Promise((resolve,reject) => {
//     let a = 1+1;
//     if ( a == 2 ) {
//         resolve("Succes")
//     } else {
//         reject("Failed")
//     }
// })

// p.then((message) => {
//     console.log(" Then is " + message)
// }).catch((message) => {
//     console.log("Catch is " + message)
// })


// VAR/LET SCOPE
// HOISTING MEHANIZAM
// CLOSUREEE MDN PRIMER SA RETURN X, Y MAKEADDER
// HTTP


// function mojaFunc() {
//     function drugaFunc() {
//         console.log("askfhdj");
//     }
// }

// // mojaFunc()();

// res = mojaFunc();

// res();




// var a = "first";
// var b = "second";
// var c = "third";

// console.log(a + " " + b + " " + c);

// d=4;
// console.log(d);
// var d;



// console.log(example()); // INPUT nam je 10,kao funckija bila iznad, kao ispod consol loga,

//radi samo na namefunction, imenovane funkcije se hoistaju u browseru

// function example() {
//     var a = 10;
//     return a;
// }

// var a = function () {
//     var a = 20;
//     return a;
// }

// console.log(a()); // ovo mora da bude iznad, tj, varijabla koja je dobila funkciju se ne hoista, i ona mora da ide prva pa onda console.log

// function init() {
//     var name = 'Aldin';
//     var lastname = 'Halilovic' 
//     function displayName() { 
//       return name + " " + lastname; 
//     }
//     return displayName;
// }

// var clas = init();

// console.log(clas())

// const myName = "Aldin";

// function printName() {
//     console.log(myName);
// };

// printName()

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable " + outerVariable );
        console.log("Inner Variable " + innerVariable);
    }
}

const newFunction = outerFunction("outside");

newFunction();