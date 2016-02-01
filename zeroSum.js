/*Given an array of negative/positive integers,
return true if there exists two numbers whose sum is zero.*/


function zeroSum (numbers) {
  // Write your code here, and
  // return your final answer.
  for(var i = 0; i < numbers.length; i++){
    for(var j = 0; j < numbers.length; j++ ){
      if(numbers[i] + numbers[j] === 0 && j !== i){
        return true;
      }
    }
  }
  return false;
}


// O(n)
function zeroSum (numbers) {
  var exists = {};
  return numbers.some(function(number) {
    exists[number] = true;
    return !!exists[-number]; // return true if -number exists
  });
}
