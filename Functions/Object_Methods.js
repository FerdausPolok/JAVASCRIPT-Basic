console.log("Object Methods Starts from here")

//Methonds are basically function when they are inside an onject

let person= {
    firstName: "Ferdaus", //property
    lastName: "Polok",//property
    doy: 1998, //property
    //could be value hishebe number, arr, string, date, onject

    //but we can set a function as an value

    fullname: function(){ //method
        return`${this.firstName} ${this.lastName}`
    }
}

console.log(person.firstName)
console.log(person.fullname())


//property vs method example using string
//properfty

strr="polok Zaman"

console.log(strr.length) //property of string
console.log(strr.split(" ")) //method of String

//JS Treats eveythig as an object so that tar kajer shubidha hoy
