console.log("Array AND Object mix starts form here")

var ar =[10,11,8,5]
console.log(ar)

//placing array inside an array 

var ar2 = [1,2,3,['a','b','c'],4]
console.log(ar2)
console.log(ar2[3])
console.log(ar2[3][0])

//multiple arrays inside a single array

ar3=[1,2,3,['a','b','c'],10,12,['lt1','lt2',[1,22,3],'lt4'],20]
//how to access the data 22
console.log(ar3[6][2][1])

//object inside an array

ar4=[1,2,['a','b'],{name:'Pippo', age:"2 years"}]
console.log(ar4)

//how to access the age from here

console.log(ar4[3]["age"]) //or
console.log(ar4[3].age)

//onject inside array and double array inside that object

ar5 = ["it1","it2",{prop1:"item 1", prop2: [1,2,["a","b"]]}]
console.log(ar5)

//how to access the value a

console.log(ar5[2].prop2[2][1]) //or
console.log(ar5[2]["prop2"][2][1])

//we can store step by step inside an object too

var obj= {prop1: "Prop 1", prop2: "Prop 2", prop3:["item1 of prop 3","item2 of prop3"]}
console.log(obj)

//how to access item2 of prop3

console.log(obj.prop3[1])
