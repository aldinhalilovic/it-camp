let name = {
  fname: "Aldin",
  lname: "Halilovic",
};

// console.log(name);

function DogObject(name, age) {
  let dog = Object.create(constructorObject);
  dog.name = name;
  dog.age = age;
  return dog;
}
let constructorObject = {
  speak: function () {
    return "I'm a dog";
  },
};

//constructorObject je prototype od dog objekta, funkcija speak se nalazi u prototype objektu u Dog objektu
let dog = DogObject("aaaa", 3);
/*   
    {name: "aaaa", age: 3}
    [[Prototype]]: Object...
                        \\ u ovom objektu su speak i jos jedan prototype

*/
// console.log(dog);
// console.log(dog.speak());

/// umesto Object.crate => new function za objekat \\//

function NewDog(name, age) {
  this.name = name;
  this.age = age;
}

NewDog.prototype.speak = function () {
  return "I'm a dog";
};
// ovo je bez class-a, class-e su samo lepse pisanje svega ovoga;
const secondDog = new NewDog("bbbb", 4);

// console.log(secondDog);
// console.log(secondDog.speak());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  sing() {
    return `${this.name} can sing.`;
  }

  dance() {
    return `${this.name} can dance`;
  }
}

const Aldin = new Person("Aldin", "Halilovic");
// console.log(Aldin);
// console.log(Aldin.dance());
// console.log(Aldin.sing());

// person je klasa koja ima construcotra sa name i lastname, klasa prima argumente koje su joj potrebne u konstruktoru
// funkcije se pozivaju direktno, Aldin.function, one se nalaze u prototype objektu, ali se mogu pozvati
// moze da se napravi jos jedna klasa koja ima sve osobine jedne klase i plus custom osobine, koristi se extends

class Kid extends Person {
  constructor(name, lastName, age) {
    super(name, lastName);
    this.age = age;
  }

  maturity() {
    if (this.age > 18) {
      return `I'm  ${this.age} years old`;
    } else {
      return "I'm still kido";
    }
  }
}

const beba = new Kid("beba", "bebaccc", 10);
// let age = prompt("Unesi broj godina");
// const beba = new Kid("bebac", "bebac", age);

// console.log(beba);
// console.log(beba.dance());
// console.log(beba.sing());
// console.log(beba.maturity());
// console.log(Object.getPrototypeOf(beba)); prototype od beba objekta
/* 
    kid clasa ima sve osobine person klase, i sve funkcije person klase, 
    bitna je rec //////SUPER//////, koja kopira extended class, constructora i sve funkcije koje se nalaze u njoj
    pozivaju se isto, kid.function, i bilo koja logika moze da se ubaci bilo gde.
    sve se nalazi u prototype objektu, 

*/

// const myDate = new Date(1993, 10, 13);

// console.log(myDate);
// myDate.getYear = function () {
//   console.log("nemaaa");
// };
// // console.log(myDate.getYear());
// myDate.getYear();

class Professor {
  name;
  subject;
  // za lakse pracenje koda, nije lose da se
  // properties ubace iznad constructora
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  grade(paper) {
    if (paper > 70) {
      console.log(`this is good`);
    } else {
      console.log("this is bad");
    }
  }

  introduceSelf() {
    console.log(`I'm ${this.name} and I will teach you ${this.subject}`);
  }
}

const mathProfessor = new Professor("Adnan", "math");

// console.log(mathProfessor);
// mathProfessor.grade(90);
// mathProfessor.introduceSelf();

class Director extends Professor {
  constructor(name, subject, age) {
    super(name, subject);
    this.age = age;
  }

  moreAboutMe() {
    console.log(
      `I'm director here, my name is ${this.name}, and I teach ${this.subject}. I work here for ${this.age} yeas`
    );
  }
}

const aboveProfessor = new Director("jaaa", "engleski", 35);
// console.log(aboveProfessor);

// aboveProfessor.grade();
// aboveProfessor.introduceSelf();
// aboveProfessor.moreAboutMe();

class Private extends Professor {
  #age;
  // #var koristimo kada necemo da iz spoljasnosti koristimo,tj da zakljucamo property
  // iz spoljasnjosti, clg(private.age) vraca undefined

  constructor(name, subject, age) {
    super(name, subject);
    this.#age = age;
  }
}
const newPrivate = new Private("Aaaaa", "bbbbbbb", 43);

// console.log(newPrivate.age);
