/*
  Define the mappings outside of the function declaration so that the function can be re-used to take dynamic inputs
  (as opposed to hard coding the mappings within the function).
  In this approach we can group common characters to replace in the original array,
  this makes the approach more flexible as you can include more and more characters with less overhead configuration of the mappings array
  The downside is the conditional check, and the loop become slightly more obscure.
*/
const mappings = [
  { original: ["a", "A"], replacement: "4" },
  { original: ["e", "E"], replacement: "3" },
  { original: ["i", "I"], replacement: "1" },
  { original: ["o", "O"], replacement: "0" },
  { original: ["s", "S"], replacement: "5" },
  { original: ["t", "T"], replacement: "7" },
  { original: ["b", "D"], replacement: "5" }
];
/*
  utility function to replace characters
  params: the sting to update, the index where we are going to insert the replacement, and the replacement value.
*/
const replaceCharacter = (str, index, replacement) => {
  return str.substring(0, index) + replacement + str.substring(index + 1);
};
//params: a string that we are converting to leet speak and an array of mappings
const leetConverter = (str, mappings) => {
  let newstr = str;
  /* 
    loop through the string and the mappings
    if the mappings original field array contains
    the character of the string the character of the string at the specified index
    pass that character, the index, and the value of the replacement key at the index of the mappings loop to the replaceCharacter function
  */
  for (var i = 0; i < newstr.length; i++) {
    for (var j = 0; j < mappings.length; j++) {
      if (mappings[j].original.includes(newstr.charAt(i))) {
        newstr = replaceCharacter(newstr, i, mappings[j].replacement);
      }
    }
  }
  //return the new string with the replaced characters
  return newstr;
};

leetConverter("Let's have some fun.", mappings);
