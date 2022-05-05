console.log("Regular Expression: It's a type of pattern matching technique. That means to check whether a particular sting is matching with any particular pattern or not")

//example - form a mobile number, email thik ache kina- pattern thik ache kine

var re1= /Hello/; // -> // is not the part of re
var re2= /hello/
console.log(re1)
console.log(re1.source)

str= "Hello World"

//Now we will check whether the str having the word Hello (re) or not

//execution short form-> exec() - Returns result in an arry or null

result = re1.exec(str) 
result = re2.exec(str) 
console.log(result)

var re3= /hello/i;   //Making case insensitive

result = re3.exec(str) 
console.log(result)

str= "Again Hello World"

result = re3.exec(str) 
console.log(result)

str= "ABCHello World"

result = re3.exec(str) 
console.log(result)

str= "Hi Hello Hello World"

result = re3.exec(str) 
console.log(result)


//test function- only return true or false

result = re3.test(str) 
console.log(result)


str= "Hi World"

result = re3.test(str) 
console.log(result)


//match works same as exec but here the construction is different. Like the matching str should be at first of the expression and then the patten will be inside 

result = str.match(re3) 
console.log(result)


//search - Returns index of thefirst match or -1

str= "A Hi World"
re3= /hi/i

result = str.search(re3) 
console.log(result)

//replace- returns new string and replaces


str= "Hi World"
re3= /hi/i

result = str.replace(re3, "Hello") 
console.log(result)