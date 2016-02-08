/*
Given a positive integer n, return its digits reversed.
DO NOT CONVERT n INTO A STRING OR ARRAY.
Only use integers and math in your solution.
*/

function reverseInteger (n) {
  // Write your code here, and
  // return your final answer.
  var revNum = 0;
  while(n !== 0){
    revNum *= 10;
    revNum += n % 10;
    n = Math.floor(n/10)
  }
  return revNum
}
