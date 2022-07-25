// // console.dir(document);

// // console.log(document.domain);

// console.log(document.URL);
// console.log(document.title);
// // document.title = "Aldin";
// // console.log(document.title)
// // console.log(document.head);
// // console.l
// console.log(document.all);
// console.log(document.all[12]);

// document.all[12].textContent = "Aldinnn";
// console.log(document.all[12])

// var items = document.getElementsByClassName("text");
// console.log(items);


// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Liste predmeta"

// GETELEMENTBYID    biramo element iz html-a preko ID

// console.log(document.getElementById("head-title"));

// var headTitle = document.getElementById("head-title");
// console.log(headTitle);
// headTitle.textContent = "Hello"
// headTitle.innerHTML = "<p>Hello</p>"
// headTitle.style.borderBottom = "solid 2px black"

// GETELEMENTBYCLASS

// var items = document.getElementsByClassName("item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Predmet 2";
// items[1].style.color = "black";
// items[1].style.backgroundColor = "yellow";

// ako hocemo da promenimo svim predmetima boju, ne mozemo items.style.backgroundColor, moramo petlju

// for (let i = 0; i <items.length; i++) {
//     items[i].style.backgroundColor = "blue"
// };

// GETELEMENTSBYTAGNAME   

// sve iste metode, samo trazimo tag name elementa, npr : document.getElementsByTagName ("h2");



// QUERYSELECTOR         elemente sa istim tagom/klasom/id-jem, uzima samo prvi, ne odnosi se na sve, vec samo na prvi

// var header = document.querySelector("#head");
// header.style.borderBottom = "2px solid black";

// var input = document.querySelector("input");
// input.value = "Hello world";
// input.style.fontWeight = "bold";
// input.style.paddingLeft = "10px"
// input.style.color = "rgba(0, 0, 0, 0.669)";

// var submit = document.querySelector("input[type=submit]");
// submit.value = "Send a message";

// QUERYSELECTORALL      uzima sve elemente sa istim tagom/klasom/id-jem,

// var items = document.querySelectorAll(".item");
// console.log(items);

// for (let i = 0; i < items.length; i++) {
//     if ( i % 2 === 0) {
//         items[i].style.backgroundColor = "yellow";
//     } else if ( i % 2 !== 0) {
//         items[i].style.backgroundColor = "green";
//     }
// }  //DA PROMENIM PARNOM I NEPARNOM BOJU




// PARENTNODE  -  OZNACAVA PARENT OD ELEMENTA KOJEG SMO IZABRALI, 
//                 <div>  <h3> </h3> </div>
//                 parent od h3 je div.....

// PARENTELEMENT DELUJE NA ISTI NACIN
// var itemList = document.querySelector("#text");

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = "red"

// CHILDNODES

// console.log(itemList.childNodes)

// CHILDREN

// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "red"
// first child  -  nepotrebna metoda, pokazuje prvu stvar od neceg     / ima i lastChild
// console.log(itemList.firstChild);
// firstElementChild  -  daje prvi element, dobra metoda         / ima i lastElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello world";

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "coral"

// KREIRANJE STVARI PREKO JS;

// var newDiv = document.createElement("div");

// creating class name
// newDiv.className = "hello";

// creating id
// newDiv.id = "hello"

// creating attribute
// newDiv.setAttribute("title", "Hello world");

// create text node

// newDivText = document.createTextNode("Hello world");
// newDiv.appendChild(newDivText);

// console.log(newDiv)


// var head = document.querySelector(".head");
// var h1 = document.querySelector(".head h1");

// head.insertBefore(newDiv, h1);

// newDiv.style.fontSize = "30px";
// newDiv.style.fontWeight = "bold";
// newDiv.style.background = "none";

// newDiv.style.paddingRight = "5px";




// function buttonClick(e) {
//     document.getElementById("head").textContent = "Changed";
//     document.querySelector("#menu").style.backgroundColor = "yellow"
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(output)
//     output.innerHTML = "<h3>"+e.target.id+"</h3>"

//     console.log(e.clientX);    korditane misa na x osi od windowa
//     console.log(e.clientY);    kordinate misa na y osi od windowa

//     console.log(e.offsetX);    kordinate misa na x osi od diva
//     console.log(e.offsetY);    kordinate misa na y osi od diva
//     console.log(e.altKey);
// }

// var button = document.getElementById("button");
// var box = document.getElementById("box")
// var output = document.getElementById("output");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent)

// var itemInput = document.getElementById("jedan");
// var form = document.getElementById("input");
// var select = document.querySelector("select")

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
// itemInput.addEventListener("input", runEvent);
// select.addEventListener("change", runEvent);
// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//     e.preventDefault();
//     console.log("EVENT TYPE: "+e.type);
//     // document.body.style.display = "none"
//     // console.log(e.target.value);

//     // document.getElementById("output").innerHTML = "<h3>"+e.target.value+"</h3>"

//     // output.innerHTML = "<h3>MouseX: "+e.offsetX+"</h3><h3>MouseY:"+e.offsetY+"</h3>" 
//     // document.querySelector("#menu").style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
// }



