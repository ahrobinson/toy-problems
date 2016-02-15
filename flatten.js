/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Examples
----------
arrays: [ [ 10 ], [ 20, 30 ], [ 40 ] ] ==>	[ 10, 20, 30, 40 ]
arrays: [ 1, 2, [ 3 ], 4, [ 5, [ 6 ], 7 ] ]	==> [ 1, 2, 3, 4, 5, 6, 7 ]
*/

function flatten (arrays) {
  // Write your code here, and
  // return your final answer.

  var array = []
  var recurse = function(arr){
    for(var i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        recurse(arr[i])
      } else {
        array.push(arr[i])
      }
    }
  }
  recurse(arrays)
  return array.length ? array : null
}
