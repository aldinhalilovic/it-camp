var form = document.getElementById("#addForm");
console.log(form)
var itemList = document.getElementById("items");

form.addEventListener ("submit", addItem);

function addItem(e) {
    e.preventDefault();

    alert(1);
}