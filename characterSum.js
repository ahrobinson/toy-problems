/*
Character Sum
Given a string of arbitrary size, convert each character into
its integer equivalent and sum the entirety.

Examples
Input |	Output
"123" |	6
"0101" |	2
"so cool!!1!"	| 1



*/


function charSum (str) {
  // Write your code here, and
  // return your final answer.
  var sum = 0
  for(var i = 0; i < str.length; i++){
    if(parseInt(str[i])){
      sum += parseInt(str[i])
      console.log(str[i])
    }
  }
  return sum
}
