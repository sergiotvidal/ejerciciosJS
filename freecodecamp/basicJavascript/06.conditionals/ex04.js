// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

function testStrict(val) {
    //unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testStrict(10);