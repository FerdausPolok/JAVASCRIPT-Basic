console.log("Satic Function")

//normal method/ function need to be called via object but static function/ method need to be called via class

class Person3 {

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;        
    }
    
    greeting(){
        console.log(`Hello ${this.firstName} ${this.lastName}!`)
    }

    static test(){
        console.log(`I am a Static Function`)
    }
}

let person6 = new Person3("Mr", "Kuddus")

console.log(person6.greeting())

//console.log(person6.test()) //throw error cause we can't call a satic method using object, we need to call it via class!

console.log(Person3.test())