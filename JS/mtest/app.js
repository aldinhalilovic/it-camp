// 1. Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.
 
// const miles = [15,20,1,60,45,120]

// const returnkm = ((value) => {
//     const km = 
     

//     return totalDistanceInKilometers = km.reduce((preValue, postValue) => preValue + postValue);
// })

// console.log (totalDistanceInKilometers(miles))



// const miles = [15,20,1,60,45,120]

// const returnkm = ((value) =>{
//     const km = value.map((value) => value * 1.6);

//     const totalDistanceInKilometers = km.reduce((prevValue, curValue) => prevValue + curValue );
//     return totalDistanceInKilometers
// })

// console.log(returnkm(miles))



// 2.From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
 
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = ((value) => {
//     const even = value.filter((value) => value % 2 === 0).map(el => el * el)
//     // const double = even.map((value) => value * value)
//     return finish = even.reduce((preValue, postValue) => preValue + postValue)
// })

// console.log (result(numbers))



let strings = ["avengers", "captain america", "ironman", "black panther"];

const upper = (heroes) => {
    return heroes.map(el => el.toUpperCase()) 
}

console.log(upper(strings))





