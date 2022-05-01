console.log("Function Expression and Arrow Function Starts from here")

//Normal Decration

function SaySomething(name){
    console.log("Hello "+name)
}

//Function Expression

let SaySomething2 = function(){
    console.log("Hello World")
}

//Arrow Function -> React JS And Angulr a prochur use hoy

let SaySomething3 = (line1,line2) => {
    console.log(line1, line2)
}

SaySomething("Polok");
SaySomething2();
SaySomething3("Arrow", "Working");

