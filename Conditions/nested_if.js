console.log("Nested If Starts from here")

//find the largest number

var n1 = prompt("Enter first number")
var n2 = prompt("Enter second number")
var n3 = prompt("Enter 3rd number")

n1= parseInt(n1)
n2= parseInt(n2)
n3= parseInt(n3)

if (n1>n2){
    if(n1>n3){
        console.log(n1 +" is the largest number")
    }
    else{
        console.log(n3 +" is the largest number")
    }
   
}

else{

    if(n2>n3){
        console.log(n2 +" is the largest number")
    }
    else{
        console.log(n3 +" is the largest number")
    }
}
