// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let i, j;

let filas = +prompt("Introduce un número de filas");

console.log(filas);
console.log(typeof filas);

let columnas = +prompt("Introduce un número de columnas");

let result = filas * columnas;

document.write("<table border>");

for (let i = 0; i < filas; i++) {
  document.write("<tr>");
  for (let j = 0; j < columnas; j++) {
    document.write("<td>");
    document.write(result);
    result--;
    document.write("</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
