let godine = 15

switch(godine) {
    case 20:
        console.log ("Ima 20 godina")
        break;
    case 15:
        console.log ("Ima 15 godina")
        break;
    default:
        console.log ("Nije upao ni u jedan case")
}

const isSunny = true;
//  if (isSunny) =  if (isSunny === true)
//  if (!isSunny) = if (isSunny === false) || if (isSunny !=== true)
if (isSunny ) {
    console.log ("Ponesi naocare");
} else {
    console.log ("nemoj da nosis naocare");
}

//                ||
// TERNARY OPEARATOR

isSunny ? console.log ("Danas je suncano") : console.log ("Nije suncano")

let age = 19
// let punoletstvo = age >= 18 ? true  : false;


if ( age >= 18) {
    punoletstvo = true;
} else {
    punoletstvo = false
}

 
console.log ("Punoletan", punoletstvo)

// falsy  values su : 0, -0, "", null, undefined, NaN


// MDN TRUTHY VALUES / DA SE ISTTRAZI TRUTHY I FALSY VALUES

