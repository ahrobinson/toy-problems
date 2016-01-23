/*

Make an array method that can return whether or not a context array
is a subset of an input array. To simplify the problem, you can assume
that both arrays will contain only strings.

*/


Array.prototype.isSubsetOf = function() {
  var arr = arguments[0];
  var count = 0
  for(var i = 0; i <this.length;i++){
    if(arr.indexOf(this[i]) !== -1){
      count++
    }
  }
  return count === this.length
};
