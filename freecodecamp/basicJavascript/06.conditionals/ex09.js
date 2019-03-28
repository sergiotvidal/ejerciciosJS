// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val > 100) {
      return "Over 100";
    }
    //si el val es mayor de 100, cumple la primera condición, entra y ya no sigue

    if (val > 10) {
      return "Over 10";
    }
  
    return "10 or Under";
  }
  testGreaterThan(10);