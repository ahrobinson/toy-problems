/*
Write a function that accepts an array of integers and
returns the largest product possible from three of those numbers.

[ 2, 1, 3, 7 ]	==> 42

[ 0, 2, 3 ]	==> 0

*/

//largest number will either be the largest 3 numbers or the lowest 2 and the highest
function largestProductOfThree (array) {
  // Write your code here, and
  // return your final answer.
  if(array.length < 3){
    return;
  }
  if(array.length === 3){
    return array.reduce(function(prev, curr, ind, arr){
      return prev * curr
    })
  }
  var arr = array.sort(function(a,b){
    return a > b
  })
  var high3 = arr.slice(-3);
  var low2 = arr.slice(0,2);

  var high = high3.reduce(function(prev, curr){
    return prev * curr
  })
  var low = (low2.reduce(function(prev, curr){
    return prev * curr
  }) * arr[arr.length-1]);

  if(high > low){
    return high;
  }
  return low;
}
