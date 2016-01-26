/*

Write a function that returns a object that represents a virtual DOM element.
A virtual DOM element is an object that has tag, attrs, and children attributes.

Parameters:

tagName (required) - an HTML element tag name as a string.

attrs (optional) - an object of attributes with zero or more
of the following keys:class, id, and/or type.

content (optional) a string, an object, or an array of strings and/or objects.

*/





function vdom (tagName, attrs, content) {
  // Write your code here, and
  // return your final answer.
  var obj = {}
  obj.tag = tagName || "";
  obj.attrs = {};
  obj.children = [];
  if(typeof attrs === "object" && !Array.isArray(attrs)){
    for(var key in attrs){
      if(key === "class" || key === "id" || key === "type"){
        obj.attrs[key] = attrs[key];
      } else {
        console.log('keyattrs: ',attrs[key])
        if(!obj.children.length){
          obj.children.push({});
        }
          obj.children[0][key] = attrs[key]

      }
    }
  } else if(Array.isArray(attrs)) {
    for(var i = 0; i < attrs.length; i++){
      obj.children.push(attrs[i])
    }
  } else if(attrs) {
    obj.children.push(attrs)
  }

  if(content){
    obj.children.push(content)
  } else if(!content && !obj.children.length) {
    obj.children = null
  }
  console.log('obj:',obj)
  return obj

}
