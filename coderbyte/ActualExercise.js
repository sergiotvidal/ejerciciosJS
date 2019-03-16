// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Sample Test Cases
// Input:"hello*3"

// Output:"Ifmmp*3"

// Input:"fun times!"

// Output:"gvO Ujnft!"

function LetterChanges(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i];
  }

  return console.log(str);
}

// function call
LetterChanges("hello*3");
