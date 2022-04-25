//undefined: whenever we don't assaign a values in a variable

var und
console.log(und) 
console.log(und == undefined) //2 equal sign -> value check
console.log(und === undefined) //3 equal sign-> value nad type check


//null

var nl= null

console.log(nl)
console.log(nl == undefined)
console.log(nl === undefined)

//empty value

var ev=""

console.log(ev)

//comparing empty value with null and undefined value

console.log(ev==nl)
console.log(ev===nl)

console.log(ev==und)
console.log(ev===und)

//Not a Number NaN-> Failed mathematics oparation returns

var notnum= "1bc"/2

console.log(notnum)
