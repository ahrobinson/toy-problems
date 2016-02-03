/*
A new law has been passed that mandates a tax on genetically modified food.
A certain farmer decides to increase the price of his goods by 15% in response,
and wants your help on analyzing the difference.
Given the farmer’s catalog and a category name, your task is to
return the summation of all price increases for foods
in that category (round to the nearest cent).

NOTE: You are required to use at least one filter.
Pros can use reduce to make their code even more functional-style.


Example
----------
foods:
[
{ "id": 243, "name": "Rice", "centsPerUnit": 20, "category": "grains" },
{ "id": 153, "name": "Wheat", "centsPerUnit": 540, "category": "grains" },
{ "id": 234, "name": "Corn", "centsPerUnit": 400, "category": "vegetables" },
{ "id": 634, "name": "Celery", "centsPerUnit": 240, "category": "vegetables" },
{ "id": 634, "name": "Spinach", "centsPerUnit": 260, "category": "vegetables" },
{ "id": 145, "name": "Pineapple", "centsPerUnit": 400, "category": "fruits" },
{ "id": 145, "name": "Pears", "centsPerUnit": 140, "category": "fruits" }
]
category:
"vegetables"

output: 135

*/

function getTaxIncrease (foods, category) {
  // Write your code here, and
  // return your final answer.
  var filt = foods.filter(function(item){
    return item.category === category
  })
  // console.log(filt)
  var a =  filt.reduce(function(prev,nex){
    console.log(nex.centsPerUnit)
   return (prev + nex.centsPerUnit)
  },0)
  // console.log('a: ', a)
  return a * 0.15
}
