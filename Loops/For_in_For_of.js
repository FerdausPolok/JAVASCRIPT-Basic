console.log("For in and FOr of starts from here")

//For-in String/ Array/ Object
//For-of String/ Array

let string1="My Name is Polok"
let array1=["Banana", "Mango","Apple"]
let object1={
    name:'Polok',
    age:24,
    profession:"Software Engineer"}


console.log("In terms of String")

//of use == we will get Index

for ( x in string1){
    console.log(`index ${x} and value: ${string1[x]}`)
}   

//of use == we will get item/values

for ( x of string1){
    console.log(`value: ${x}`)
}  




console.log("In terms of Array")
    

for ( x in array1){
    console.log(`index ${x} and value: ${array1[x]}`)
}   

for ( x of array1){
    console.log(`value: ${x}`)
}  





console.log("In terms of Object")

//object a property e holo Index

for ( x in object1){
    console.log(`index ${x} and value: ${object1[x]}`)
} 