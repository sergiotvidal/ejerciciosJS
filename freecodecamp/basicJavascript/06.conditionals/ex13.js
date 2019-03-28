// Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".

function testLogicalAnd(val) {
  
    if (val <= 50 && val >= 25) {
        return "Yes"
    }
    return "No";
  }
  
  // Change this value to test
  testLogicalAnd(10);