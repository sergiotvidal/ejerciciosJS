// Push ["dog", 3] onto the end of the myArray variable.

// Setup
var myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3]);

document.write(myArray);

myArray.splice(1, 0, ["dog", 3]); // para insertar un elemento en la posición 1, eliminando 0 elementos, elemento array
