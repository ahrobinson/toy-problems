/*
Given an arbitrary input string, return the first non-repeating character.
For strings with all repeats, return 'sorry'.
*/

function firstNonRepeatedCharacter (string) {
  // Write your code here, and
  // return your final answer.
  var obj = {}
  for(var i = 0; i < string.length; i++){
    if(!obj[string[i]]){
      obj[string[i]] = 1
    } else {
      obj[string[i]]++
    }
  }

  for(var key in obj){
    if(obj[key] === 1){
      return key
    }
  }
  return "sorry"
}
