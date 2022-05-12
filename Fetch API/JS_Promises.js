//Alternative and smarter way of CallBack function

var persons2 = [
    {firstName: "Abul", lastName: "Kalam"},
    {firstName: "Abdul", lastName: "Kuddus"},
]

function createPerson(person, cb){
    let prom = new Promise(function (resolve, reject){
        persons2.push(person);
        error = false

        if(!error){
            resolve();
        }
        else{
            reject("Error: Something is wrong!!!")
        }
        
    });
    return prom
}

function getPerson(){
    setTimeout(function(){
        output = data =''
        persons2.forEach(function(item){
            output+= `<li>${item.firstName} ${item.lastName} </li>`
        });
        document.getElementById("output3").innerHTML= output;
    }, 1000)
}

createPerson({firstName: "Doya", lastName: "Nondo"})
.then(getPerson)
.catch(function (err){
    console.log(err);
})