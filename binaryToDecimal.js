/*
Given a number n (represented as a binary number string),
convert n to base 10. Do NOT use parseInt(n, 2).
You may use the parseInt function that takes in just one argument.
*/


function binaryToDecimal (n) {
  // Write your code here, and
  // return your final answer.
  var tot = 0;
  var amt = 1;
  for(var i = n.length-1; i >= 0; i--){
    if(n[i] === "1"){
      tot += amt;
    }
    amt *= 2
  }
  return tot;
}
