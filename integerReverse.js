/*
Given a positive integer n, return its digits reversed.
DO NOT CONVERT n INTO A STRING OR ARRAY.
Only use integers and math in your solution.
*/

function reverse (n) {
  // Write your code here, and
  // return your final answer.
  if(n < 0){
    n = Math.abs(n);

    var revNum = 0;
    while(n !== 0){
      revNum *= 10;
      revNum += n % 10;
      n = Math.floor(n/10)
    }
    return -revNum
  }

  var revNum = 0;
  while(n !== 0){
    revNum *= 10;
    revNum += n % 10;
    n = Math.floor(n/10)
  }
  return revNum
}
