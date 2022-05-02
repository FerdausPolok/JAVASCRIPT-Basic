console.log("JavaScript Classes")

//Class i a template for creating Object

let person1={
    firstName:"Ferdaus",
    lastName:"Polok",
    dob: 1-1-1998,

    fullName: function(){
        console.log(`Full Name: ${this.firstName}, ${this.lastName}`)
    }
}

let person2={
    firstName:"Abida",
    lastName:"Trisha",
    dob: 1-1-1998,

    fullName: function(){
        console.log(`Full Name: ${this.firstName} ${this.lastName}`)
    }
}

console.log(person1,person2)

//now if we need ro create n number of object same as person then we can creat a template which we call class to do same task for us

//creating a class for person

class Person { //name always first letter in capital

    //declaring property using cons

    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob

        
    }

    //creating methods inside class

    ageCalculator(){
        let birthday = new Date(this.dob)
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear()-1970);

    }

    fullName(){
        console.log(`Full Name: ${this.firstName} ${this.lastName}`)
    }
}

//Creating object

let person3 = new Person("Mr","A","01-17-1998");
let person4 = new Person("Mr","B","01-07-1999");


console.log(person3)
console.log(person3.fullName())
console.log(person3.ageCalculator())

console.log(person4)
console.log(person4.fullName())
console.log(person4.ageCalculator())