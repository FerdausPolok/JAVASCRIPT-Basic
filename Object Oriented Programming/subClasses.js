console.log("Sub Classess")

class Person2 {

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        
    }
    
    greeting(){
        console.log(`Hello ${this.firstName} ${this.lastName}!`)
    }
}

class Customer{

    constructor(firstName, lastName){

        this.firstName = firstName;
        this.lastName = lastName;
        this.phone= phone;
        this.memberShip= memberShip;
    }
}

//we needed some similar property on Customer Class same as Person2 class, so we can take them from the Person2 class by applying Inheritance keyword-> extends

class NewCustomer extends Person2{
    constructor(firstName, lastName, phone, memberShip){
        super(firstName,lastName); //this will collect fname lname code from Person2 class
        this.phone=phone;
        this.memberShip=memberShip;
    }
}

let person5 = new Person2("Ferdaus Zaman","Polok") 
console.log(person5)
console.log(person5.greeting())

let customer1 = new NewCustomer("Mr","X","01521430414","Regular")
console.log(customer1)
console.log(customer1.greeting())