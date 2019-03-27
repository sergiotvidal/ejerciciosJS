// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma

let n = +prompt("Introduce un número");

let i, j;

if (isFinite(n)) {
  for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      document.write(i);
    }
    document.write("<br>");
  }
} else {
  alert("El número introducido no es válido");
}
