/*
A teacher needs your help grading her class of students.
Given a report of all student grades, return both the
class average and the average of each student.

NOTE: Round any calculations to the nearest 2 decimal places.

Example
-----------
input:
"Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18"
output:
{ "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }



*/


function autograde (report) {
  // Write your code here, and
  // return your final answer.
  // var a = report.replace('\n', ' ');
  var obj = {};
  obj.all = 0;
  var rep = report.split("\n");
  for(var i = 0; i < rep.length; i++){
    rep[i] = rep[i].split(" ");
  }
  for(var j = 0; j < rep.length; j++){
    for(var k = 1; k < rep[j].length; k++){
      console.log(rep[j].length-1)
      if(!obj[rep[j][0]]){
        obj[rep[j][0]] = 0;
      }
      obj[rep[j][0]] += Number(rep[j][k])

    }
  }

  for(var key in obj){
    obj.all += obj[key]/(rep[0].length-1)
    obj[key] = obj[key]/(rep[0].length-1)
  }
  // console.log(obj.all)
  obj.all = Math.round(obj.all/(Object.keys(obj).length-1) *100)/100
  return obj
}
