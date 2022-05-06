console.log("Literal and Meta Characters")

//How to create different type of patterns

//Lireral Characters

var re = /hello/i;
var re = /low W/i;
var re = /lowW/i;

var str = "Hellow World";

console.log(re.exec(str));

function reTest(re, str){
    if (re.test(str)){
        console.log(`${str} matches ${re.source} `)
    }

    else{
        console.log(`${str} doesn't matches ${re.source} `)
    }
}

reTest(re, str)

//Meta Characters

//-> ^
str = "Hellow World";
re = /^hello/i //^ symbol means must STARTS with
reTest(re, str)

str = "A Hellow World";
re = /^hello/i 
reTest(re, str)

//-> $
str = "Hellow World";
re = /LLOW$/i //$ symbol means must ENDS with
reTest(re, str)

str = "A Hellow World";
re = /LD$/i 
reTest(re, str)

//We can also use them together
//-> ^$
str = "A Hellow World";
re = /^world$/i //Must STARTS and ENDS with
reTest(re, str)

str = "World";
re = /^world$/i 
reTest(re, str)

str = "World";
re = /^wo.ld$/i //. symbol means any char -> j kono akta thaklei holo
reTest(re, str)

//-> *
str = "Hello World";
re = /w*rld/i //* none or 1 or more charachter has to be there
reTest(re, str)

str = "Hello Wrld";
re = /w*rld/i //* none or 1 or more charachter has to be there
reTest(re, str)

//-> ?
str = "Hello World";
re = /he?a?llo/i //* e or a thakleo hobe na thakleo hobe, onno kichu hole hobe na
reTest(re, str)

str = "Hallo rrld";
re = /he?a?llo/i 
reTest(re, str)

str = "Hillo rrld";
re = /he?a?llo/i 
reTest(re, str)

