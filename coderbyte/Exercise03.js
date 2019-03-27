// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {
  var longestWord = "";
  var longestLength = 0;
  sen = sen.replace(/[^a-zA-Z0-9\s]/g, "").split(" ");

  for (var i = 0; i < sen.length; i++) {
    if (sen[i].length > longestLength) {
      longestLength = sen[i].length;
      longestWord = sen[i];
    }
  }
  return longestWord;
}

// function call
LongestWord(readline());
