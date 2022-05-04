console.log("Error Handling with try catch")

console.log("Before Error")

try{
    test();
    
} catch(err){ //err er vetor error ta save thakbe
    console.log(err.message)
    console.log(err.name)
} finally{ //Error thakuk r na thakuk eta kaj korbei

    console.log("I'm inside Finally Block")
}

console.log("After Error")


//Generating own error message

var a = 19;

try{
    
    if(a>15) throw "Too Big";
    else if (a<5) throw "Too Small"

} catch(err){
    console.log(err)
}
