//Fetch API
//Fetch API uses JS Promise

console.log("Fetch API")
console.log(window)


document.getElementById("get_data").addEventListener('click',getData);

function getData(){
    fetch("http://api.icndb.com/jokes/random")
    //arrow function in then
    .then(res => res.json())
    
    .then(data => {
        console.log(data.value.joke)
        document.getElementById("output").innerHTML=`<p>${data.value.joke}</p>`
    })
    .catch(err=> {console.log(err) })
    
}