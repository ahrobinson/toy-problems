/*

Given an array of negative/positive integers, find the largest element.
DO NOT use Math.max


numbers: [ 20, 30, 10 ] ==>	30

numbers: [ 5 ] ==>	5
*/


function max (numbers) {
  // Write your code here, and
  // return your final answer.
  var largest;
  for(var i = 0; i < numbers.length; i++){
    if(!largest){
      largest = numbers[i];
    }
    if(numbers[i] > largest){
      largest = numbers[i];
    }
  }
  return largest;
}
