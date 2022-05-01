console.log("Math and Date Objects Starts from here")

//JS Built in Object

//Math Object

let val;
console.log(val)

val=Math.PI;
console.log(val)

val=Math.E;
console.log(val)

val = Math.round(val) //Makes Float -> Int
console.log(val)

val = Math.ceil(1.1) //Boro ta dibe int a
console.log(val)

val= Math.floor(1.9) //Choto ta dibe int a
console.log(val)

val=Math.sqrt(81)
console.log(val)

val=Math.abs(-8)
console.log(val)

val=Math.pow(2,3) //2 to the power 3
console.log("power",val)

val=Math.min(2,3,185454,1.2) //Smallest
console.log("min",val)

val=Math.max(2,3,185454,1.2) //lasrgest
console.log("min",val)

val=Math.random() //Random number that is maller than 1
console.log("min",val)

val=Math.random() *100 //Random number in range (0 to 99)
console.log("min",val)

val=Math.floor(Math.random() *100) //Random number in range (0 to 99)
console.log("min",val)


//Date Object

let tm;
let today= new Date();

val = today.toString();
console.log(val)

let birthday= new Date('12-07-1998 10:00:00')
console.log(birthday)

birthday= new Date('December 07 1998')
console.log(birthday)

birthday= new Date('12/07/1998')
console.log(birthday)

val = today.getMonth()
console.log(val) //month er number start hoy zero theke

val = today.getDate()
console.log(val) 

val = today.getDay()
console.log(val) 

val = today.getFullYear()
console.log(val) 

val = today.getHours()
console.log(val) 

val = today.getMinutes()
console.log(val) 

val = today.getMilliseconds()
console.log(val) 

val = today.getTime() 
console.log(val) 

//Timestamp=> Amount of seconds past since Jan 1st 1970

//ALready seted date value changing

console.log(birthday)
birthday.setMonth(10);
birthday.setDate(9);
birthday.setFullYear(1999)


console.log(birthday)