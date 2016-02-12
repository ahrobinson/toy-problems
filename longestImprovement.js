/*
Given an array, find the length of the longest increasing sequence.

Examples
--------------
numbers: [ 10 ] ==>	1

numbers: [ 10, 20, 30, 10, 20 ]	==> 3

*/


function longestImprovement (numbers) {
  // Write your code here, and
  // return your final answer.
  var count = 1;
  var longest = 0;
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] < numbers[i+1]){
      count++
    } else {
      count = 1;
    }
    if(count > longest){
      longest = count;
    }
  }
  return longest
}
