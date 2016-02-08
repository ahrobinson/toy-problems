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

//O(n)

Array.prototype.isSubsetOf = function() {
  var arr = arguments[0];
  var obj = {}
  var count = 0
  //this will increase for duplicate values in Array
  var offset = 0
  for(var i = 0; i < this.length;i++){
    if(!obj[this[i]]){
      obj[this[i]] = 1
    } else {
      offset++
    }
  }

  for(var i = 0; i <arr.length;i++){
    if(obj[arr[i]]){
      obj[arr[i]]++
    }
  }
  for(var key in obj){
    if(obj[key] > 1){
      count++
    }
  }
  return count === this.length - offset
};
