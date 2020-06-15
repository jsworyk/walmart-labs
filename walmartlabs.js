/*
  define the mappings outside of the function declaration so that the function can be re-used to take dynamic inputs.
  Mappings defined very literally, there is a bit of redundancy (declaring a and A seperately even though they have the same replacement value)
  but this simplifies the conditional check within the leetConverter function as compared to my other submitted solution
*/
let mappings = {
  a: "4",
  A: "4",
  e: "3",
  E: "3",
  i: "1",
  I: "1",
  o: "0",
  O: "0",
  s: "5",
  S: "5",
  t: "7",
  b: "5",
  D: "5"
};
//params: string we are updating, the index where we are updating the string, the replacement value
const replaceCharacter = (str, index, replacement) => {
  return str.substring(0, index) + replacement + str.substring(index + 1);
};
//params: string we are converting to leet speak and an object containing mapping values
const leetConverter = (str, mappings) => {
  //create a new variable called newstr, we are going to be mutating the string so we want to hold this as a new variable
  let newstr = str;
  //Iterate through the string character by character
  for (var i = 0; i < newstr.length; i++) {
    // check to see if the mappings object has a key equal to the character in the string at the specified index
    if (mappings.hasOwnProperty(newstr.charAt(i))) {
      /*
        if it does, assign newstr to be equal to the result of the replaceCharacter function,
        passing the newstring, the index, and the value of the mappings object where the key
        is the character at the index of the string.
       */
      newstr = replaceCharacter(newstr, i, mappings[newstr.charAt(i)]);
    }
  }
  //return the new string with the replaced characters
  return newstr;
};

leetConverter("Let's have some fun.", mappings);
