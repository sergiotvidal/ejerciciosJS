// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

let i, j;

let num = prompt("Introduce un número entre 1 y 50");

if (isFinite(num)) {
  if (num > 0 && num <= 50) {
    for (let i = 0; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
        document.write(j);
      }
      document.write("<br>");
    }
  } else {
    alert("No has introducido un número válido");
  }
} else {
  alert("No has introducido un número");
}
