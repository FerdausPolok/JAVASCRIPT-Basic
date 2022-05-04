// document.getElementByID() -> Takes single element 

console.log("DOM Selectore - Single item")

let val2;

//Getting an Element
val2 = document.getElementById("document-title");
console.log(val2)

//Changing style
// document.getElementById('document-title').style.background= '#333'

//document.querySelector()

val= document.querySelector('#document-title')
console.log(val2)

val= document.querySelector('.title-class')
console.log(val2)

val= document.querySelector('h3')
console.log(val2)