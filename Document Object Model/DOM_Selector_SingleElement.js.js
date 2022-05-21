console.log("DOM Selector Single Item Starts from here");

// document.getElementByID() -> Takes single element by id

let val2;

//Geeting an Element
val2 = document.getElementById('document-title');
val2 = document.getElementById('document-title').id;
val2 = document.getElementById('document-title').className;
val2 = document.getElementById('document-title').classList;
//Multiple id same hole 1st element anbe

//Changing style
document.getElementById('document-title').style.background= '#333';
document.getElementById('document-title').style.color='#fff';
document.getElementById('document-title').style.padding='10px'
document.getElementById('document-title').style.display='none'
document.getElementById('document-title').style.display='block';

//Changing content
document.getElementById('document-title').textContent= 'New Title chnaged by JS';
document.getElementById('document-title').innerText='New innter text using js'
document.getElementById('document-title').innerHTML= '<i> Again new Title by JSS </i>'

//We can store document.getElementById('document-title') in a variable

// querySelector()
// can call with ID/ Class/ Tag

vall= document.querySelector('#document-title'); //# for ID
vall= document.querySelector('.title-class'); //. for ClassName
vall= document.querySelector('h3'); //Tag simple ja tai dile hobe

//list
vall= document.querySelector('ol');
vall= document.querySelector('li');
//Paranting for geeting specific item 

//access last child
vall= document.querySelector('li:last-child');

//access nth child
vall= document.querySelector('li:nth-child(4)');
vall.innerText="JS"

console.log(vall);

