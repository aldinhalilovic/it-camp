// function nekiPosao() {
//     console.log("Pocetak posla");
//     for (let index = 0; index < 990000000; index++) {}

//     console.log("kraj posla");
// }

// nekiPosao()

// JSV9000.APP



function arrayMap(arr,clback) {
    res = [];
    for (let i = 0; i < arr.length; i++) {
        newEl = clback(arr[i]);
        res.push(newEl);
    }
    return res;
};

myfunc = function(arg1) {
    return arg1 * 2;
};



// console.log(arrayMap([2,4,5,6],myfunc));


posao = new Promise((resolve, reject) => {
    response = 500;

    for (let i = 0; i <900000000; i++) {}
    if(response === 500) {
        resolve([5,6,7,8,9]);
    } else {
        reject([1,2,3,4]);
    }
});

posao.then((data) => {
    console.log("uspenso povukao podatke",data );
    arr = data.filter((el) => el % 2 ===0);
    return arr
})
.then((arg2) => {
    console.log(arg2.map((el) => el * 2))
})
.catch((err) => {
    console.log("Neuspesno povukao podatke", err);
})

