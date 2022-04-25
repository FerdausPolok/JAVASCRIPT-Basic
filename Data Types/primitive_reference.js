console.log("Premitive and Reference type startes from here")

//Primitive Types of Data
//number, string, boolean

//Reference Type of Data
//array, object

//premitive -> deals with values

let p1=7
let p2=p1 // p2=7

console.log(p1)
console.log(p2)

p1 = 45

console.log(p1) //doenst change the value with 45
console.log(p2)

//reference type- deals with reference or address -> j kono akta change korle onnotao change hobe

let r1 = [1,2,3]
let r2= r1 //r2= address of r1

console.log(r1)
console.log(r2)

r1[1]=500;

console.log(r1)
console.log(r2) //updates as well