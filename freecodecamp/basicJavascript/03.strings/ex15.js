// In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
//
// You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the result variable.
//
// You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result =
    "Sometimes, i eat " +
    myNoun +
    " , i prefer it medium rare or " +
    myAdverb +
    " cooked, if that makes me a " +
    myAdjective +
    " SOB, then i guess i am one. What you don't know is that i " +
    myVerb +
    " out of other options. So i guess it doesn't make me a piece of shit, it just makes me a phillipine.";

  return result;
}

wordBlanks("dog", "big", "ran", "quickly");
