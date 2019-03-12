// Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

let num = 500;
let i;

for (let i = 1; i <= num; i++) {
  if (i) {
    document.write(i);
    document.write("<br>");
  }
  if (i % 4 == 0) {
    document.write(i + " Múltiplo de 4");
    document.write("<br>");
  }
  if (i % 9 == 0) {
    document.write(i + " Múltiplo de 9");
    document.write("<br>");
  }
  if (i % 5 == 0) {
    document.write("<br>");
    document.write("<hr>");
  }
}
