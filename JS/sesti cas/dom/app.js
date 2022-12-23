const Abc = () => {
  const numbers = prompt("Unesi broj okretanja");
  let number = 1;

  for (let i = 0; i < numbers; i++) {
    number *= prompt("unesi broj");
  }

  alert(number);
};

Abc();
