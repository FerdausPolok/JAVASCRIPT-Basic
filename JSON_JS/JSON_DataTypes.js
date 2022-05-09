console.log("Data type starts from here")

var person={
    name: "Polok", //String
    Age: 25, //number
    married: false, //boolean
    dob: 1998-01-01, //Date
    test_null: null, //null
    test_undefined: undefined, //undefined

    greet: function(){ //function
        console.log("Hi", this.name)
    }
}

//JSON Onlt supports-> String, Number, Object, Array, Boolean, Null
//JSON Does not supports-> Undefined, Date, Function

var person_json = JSON.stringify(person)
console.log(person_json)