console.log("Starting Array")

//store more values in a single variable 

var countries = ['BD', 'IND', 'AUS'];
console.log(countries)
console.log(countries[0])

//array length

console.log(countries.length)

//item changes - Mutable 

countries[1]='USA'
console.log(countries)

//ASSIGN a single value from any arry to a variable

country = countries[1];
console.log(country)

//adding new item using array length

countries[countries.length] = 'NOR'
console.log(countries)

countries[countries.length-1] = 'NORWAY'
console.log(countries)

//push pop - item insert and item delete- always last item a kaj hoy

countries.push("PAK")
console.log(countries)

countries.pop()
console.log(countries)

countries.push("JAPAN", "UK")
console.log(countries)

//Shuru theke bad dite chaile shift use korbo

countries.shift()
console.log(countries)

countries.unshift("BANGLADESH")
console.log(countries)

//Declare empty array

var num=[]
console.log(num)

//now how to add data? -> push/ pop

num.push(1)
console.log(num)

num.push("one",2,"two")
console.log(num)

//how to split string and story as a array

var x="Bangladesh"
var y = x.split("")
console.log(y)

var y = x.split()
console.log(y)

var x="Hello World"
var y = x.split("")
console.log(y)

//kono char diye vag/ split

var x="Bangladesh is a country"
var y = x.split("n")
console.log(y)

//word alada kora from a sentence 

var x="Bangladesh is a country"
var y = x.split(" ")
console.log(y)

//how to convert a array to string

var y= ['BD', 'UK', 'US']
var z= y.toString()
console.log(z) //item er por coma use kore

//how to remove the coma- using join

z= y.join(" ")
console.log(z)

// Array concat -> using concat

console.log(countries)
console.log(y)

newAr= countries.concat(y)
console.log(newAr)

//sorting array -> Assending

console.log(newAr)
newAr.sort()
console.log(newAr)

//reverse ulto sort - Decending order sort

newAr.reverse()
console.log(newAr)









