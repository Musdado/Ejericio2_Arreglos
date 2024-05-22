function mostrarMenu() {
  const opcion = parseInt(prompt(`Elige una opción:
  1. Ejercicio 1
  2. Ejercicio 2
  3. Ejercicio 3`));

  switch (opcion) {
      case 1:
          ejercicio1();
          break;
      case 2:
          ejercicio2();
          break;
      case 3:
          ejercicio3();
          break;

      default:
          alert("Opción inválida. Por favor, elige una opción válida.");
          mostrarMenu();
  }
}

function ejercicio1() {
  let randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100); 
  randomNumbers.push(randomNumber);
  }

console.log(randomNumbers);
}

function ejercicio2() {
  let userInput = prompt("Ingresa varias palabras separadas por comas:");
  if (userInput) {
  let userArray = userInput.split(',').map(item => item.trim());
  console.log(userArray);
} else {
  console.log("No se ingreso ninguna palabra.");
}


}

function ejercicio3() {
  let numbers = [10, 40, 30, 20, 15, 5];
  numbers.sort((a, b) => a - b);
  console.log("Array ordenado:", numbers);
  let minNumber = Math.min(...numbers);
  let maxNumber = Math.max(...numbers);
  console.log("Número menor:", minNumber);
  console.log("Número mayor:", maxNumber);
}


mostrarMenu();