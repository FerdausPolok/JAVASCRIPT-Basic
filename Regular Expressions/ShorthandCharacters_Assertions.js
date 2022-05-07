console.log("Shorthand Characters and Assertions")

function reTest(re, str){
    if (re.test(str)){
        console.log(`${str} matches ${re.source} `)
    }

    else{
        console.log(`${str} doesn't matches ${re.source} `)
    }
}


//Shorthand Characher Class 

re= /\w/; //W for Word character represents Alpha numeric or _
str= "+8801712359397"
reTest(re, str)

re= /\w/; //W for Word character represents Alpha numeric or _
str= "(+*"
reTest(re, str)

//add a + in front of shorthand -? one or more

re= /\w+/; //matches one or more
str= "125"
reTest(re, str)

re= /\W+/; //matches non word charachter
str= "+-*"
reTest(re, str)

//d for Digit

re= /\d/; //matches digit
str= "+-*"
reTest(re, str)

re= /\d/; //matches digit
str= "+-5*"
reTest(re, str)

re= /\D/; //matches non digit
str= "+-*"
reTest(re, str)

re= /\s/; //matches white s
str= "+-*"
reTest(re, str)

re= /\s/; //matches white s
str= "+- *"
reTest(re, str)

re= /\S/; //matches non white s
str= "+-*"
reTest(re, str)

re= /Hello\b/; //Word boundary
str= "Hello World"
reTest(re, str)

re= /Hello\b/; //Word boundary- word er shuru or shesh a kichu thaka jabe na. shuru or shesh define hobe \b diye
str= "Hello1 World"
reTest(re, str)


//Assertions- It's like condition

re= /x(?=y)/; //Matches x only if x is before y
str= "x"
reTest(re, str)

re= /x(?=y)/; //Matches x only if x is before y
str= "xy"
reTest(re, str)

re= /x(?!=y)/; //Matches x only if x is not before y
str= "xd"
reTest(re, str)

re= /x(?!=yz)/; //Matches x only if x is not before y
str= "fsdfxyzfdsf"
reTest(re, str)