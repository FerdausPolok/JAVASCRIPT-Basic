console.log("If statement starts from here")

//if else these are called controll folw- controlled which line we should execute or not, etc.

// if(condition){
     //code to be executed
// } else if(Second condition){
//    ----
// }

// else{
// other codes
// }

if(false){
    console.log("If statement executed")
}

else if(true){
    console.log("1st Else if executed")
}

else if(true){
    console.log("2nd Else if executed")
}

else{
    console.log("Else dtatement executed")
}

console.log("End of if statement")


var age= prompt();

if (age>=50){
    console.log("old!")
}

else if(age <50  && age >=30){
    console.log("Under 50 but above or equal 30")
}

else if(age<30 && age>=18){
    console.log("18+ and under 30")
}


else if (age<=18 && age >0) {
    console.log("under 18")
}

else{
    console.log("invalid input")
}

