console.log("Callback Function")

//We will now see how can we can convert a synchronous process to asynchronous process

// setTimeout(function(){
//     console.log("Hello World")
// }, 5000); //CAN MAKE IT SLOW nth milli s | 1000ms = 1 s

// var persons = [
//     {firstName: "Ferdaus", lastName: "Polok"},
//     {firstName: "Abida", lastName: "Trisha"},
// ]

// function createPerson(person){
//     setTimeout(function(){
//         persons.push(person);

//     }, 4000);
// }

// function getPerson(){
//     setTimeout(function(){
//         output = data =''
//         persons.forEach(function(item){
//             output+= `<li>${item.firstName} ${item.lastName} </li>`
//         });
//         document.getElementById("output").innerHTML= output;
//     }, 1000)
// }

// createPerson({firstName: "Rony", lastName: "Ahmed"})
// getPerson();


//Now making the full process async


var persons = [
    {firstName: "Ferdaus", lastName: "Polok"},
    {firstName: "Abida", lastName: "Trisha"},
]

function createPerson(person, cb){
    setTimeout(function(){
        persons.push(person);
        cb();

    }, 4000);
}

function getPerson(){
    setTimeout(function(){
        output = data =''
        persons.forEach(function(item){
            output+= `<li>${item.firstName} ${item.lastName} </li>`
        });
        document.getElementById("output2").innerHTML= output;
    }, 1000)
}

createPerson({firstName: "Rony", lastName: "Ahmed"}, getPerson)
