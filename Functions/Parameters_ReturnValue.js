console.log("Parameters and Return Value")

//Function Parameter/ Argument -> Passing something into the function
//Like

//alert("Hello")
Value= "Hello Bro, What's up?"
Num=19

PassSomething(Value, Num)

function PassSomething(line, number){
    console.log("The text passed here is: ",line +" And "+number) 
}


//setteing default value on a function

function NamePrint(first_name="Ferdaus Zaman", last_name="Polok"){
    console.log("Full Name= "+ first_name,last_name)
}

NamePrint()
NamePrint("Zaman")
NamePrint("Abida Khan", "Trisha")

//Returning something from a function

function Sum(a,b){
    return a+b
}

result=Sum(12,12)
console.log(result)
