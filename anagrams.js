/*
Given two strings, return true if one string is an anagram of another.

Examples:
------------

a: "silent", b: "listen"	==> true
a: "torchwood", b: "doctor who"	==> true
a: "why?", b: "why not?"	==> false
*/

function isAnagram (a, b) {
  // Write your code here, and
  // return your final answer.
  var repa = a.replace(" ", "");
  var repb = b.replace(" ", "");

  if(repa.length !== repb.length){
    return false;
  }

  var obj = {}
  var obj2 = {}
  for(var i = 0; i < repa.length; i++){
    if(!obj[repa[i]]){
      obj[repa[i]] = 1
    } else {
      obj[repa[i]]++
    }

    if(!obj2[repb[i]]){
      obj2[repb[i]] = 1
    } else {
      obj2[repb[i]]++
    }
  }

  for(var key in obj){
    if(obj2[key] !== obj[key]){
      return false
    }
  }
  return true
}
