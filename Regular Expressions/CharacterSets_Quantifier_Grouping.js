console.log("Character Sets, Quantifier and Grouping")

function reTest(re, str){
    if (re.test(str)){
        console.log(`${str} matches ${re.source} `)
    }

    else{
        console.log(`${str} doesn't matches ${re.source} `)
    }
}


//Character Set using Brackets []

//Must be one from the bracket
re = /h[ea]llo/i
str= "Hello World"
reTest(re, str)

re = /h[ea]llo/i
str= "Hillo World"
reTest(re, str)

re = /h[ea]llo/i
str= "Heallo World"
reTest(re, str)

//Anyting except these
re = /[^Hh]ello/
str= "Hello World"
reTest(re, str)

re = /[^Hh]ello/
str= "Xello World"
reTest(re, str)

//Range can be used inside Bracket
re = /[a-z]ello/i
str= "Xello World"
reTest(re, str)

//Must be capital at starting
re = /^[A-Z]/
str= "Polok"
reTest(re, str)

//two diff ranges
re = /[A-Z a-z]/
str= "Polok"
reTest(re, str)

//Digit checking
re = /[1-9]hello/
str= "Again hello"
reTest(re, str)

re = /[1-9]hello/
str= "1hello"
reTest(re, str)

re = /[1-9][1-9]hello/ //checking two digits 
str= "11hello"
reTest(re, str)


//Quantifier using {}
//Akta jinish koybar thakte hobe bujhay

re = /hel{2}o/i //checking l lays two times or not
str= "Hello"
reTest(re, str)

re = /hel{2,5}o/i //range 2-5 time l or not
str= "Helo"
reTest(re, str)

re = /hel{2,}o/i //at least 2 times
str= "Helllllllllllllllllllllllo"
reTest(re, str)


//Parenthesis ()- For using Grouping 

//1st 10 should be Digit

re = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/ //range 2-5 time l or not
str= "Helo"
reTest(re, str)

//or we can write

re = /^([0-9]{5})/
str= "12125Helo"
reTest(re, str)

//Will check if a phone number is bangladeshi or not

re = /^\+880([0-9]){10}$/ //doller dile 10 ta porjonto hoyei end hobe bujhay
str= "+8801712359397"
reTest(re, str)

//pattern should be -? 2x3x7x

re = /([0-9]x){3}$/
str= "1x2x3x7gh"
reTest(re, str)

