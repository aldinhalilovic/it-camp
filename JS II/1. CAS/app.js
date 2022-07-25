// document.getElementById();
// document.getElementsByClassName();
// document.querySelector();
// document.querySelectorAll();
const body = document.querySelector("body")
const glavniDiv = document.querySelector("#pocetak");
const paragraf = document.createElement("p");
paragraf.textContent = "Ovo je p dodat iz JS";
glavniDiv.appendChild(paragraf);
// glavniDiv.style.backgroundColor = "red";    inline style

glavniDiv.classList.add("kocka");          //funkcija za dodavanje klase iz css fajla, prvo se napravi klasa u css, onda se nakaci na const
paragraf.classList.add("text");

const dugme = document.createElement("button");

dugme.textContent = "click me";

glavniDiv.append(dugme);

const onButtonClick = () => {
paragraf.classList.toggle("veci-font");
    
}

dugme.addEventListener("click", onButtonClick)

// const skriveniDiv = document.createElement("div");
// skriveniDiv.classList.add("drugaKocka");
// body.append(skriveniDiv);

// EVENTI - 