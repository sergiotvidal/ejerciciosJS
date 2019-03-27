// Add a local variable to myOutfit function to override the value of outerWear with "sweater".

var outerWear = "T-Shirt";

function myOutfit() {
  // así no se cambia el valor GLOBAL de outerWear
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();
