// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Sample Test Cases
// Input:"hello*3"

// Output:"Ifmmp*3"

// Input:"fun times!"

// Output:"gvO Ujnft!"

function LetterChanges(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let newalpha = "bcdEfghIjklmnOpqrstUvwxyzA";
  // let strg = str.split("");
  alpha = alpha.split("");
  newalpha = newalpha.split("");
  let answer = [];
  // debugger;
  for (let i = 0; i < str.length; i++) {
    if (alpha.indexOf(str[i]) !== -1) {
      let index = alpha.indexOf(str[i]);
      answer += newalpha[index];
    } else {
      answer += str[i];
    }
  }

  return console.log(answer);
}

// function call
LetterChanges("fun times!");
