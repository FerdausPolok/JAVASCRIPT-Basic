//Adding Element 
//Create Element

let olItem = document.createElement('li');

//Add id and Class

olItem.className="new-class another-class"
olItem.id="new-language"

//Add attribute
olItem.setAttribute('title', 'A little new title');

//Adding value/ child

olItem.appendChild(document.createTextNode("New Language"));

//Adding new element to the document

document.querySelector('ol').appendChild(olItem);



//New ulItem Creating and Adding

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://www.instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

//Replacing Element-> Heading Text

let oldHeading = document.querySelector('#document-title')

oldHeading.textContent="Replaced new Heading";

//Replacing Heading H3 with H1 (new heading)

let newHeading  = document.createElement('h1')
newHeading.appendChild(document.createTextNode("New H1 Heading"))
newHeading.className= "new-heading"

let parent = document.querySelector('#firstCon');

parent.replaceChild(newHeading, oldHeading)

//Remove ELEMENT -> lIST ITEM

let listItem = document.querySelectorAll('li');
let list = document.querySelector('ul');

listItem[5].remove(); //Google removed

console.log(listItem);
console.log(list);

//Remove using remove child - Child of list

list.removeChild(listItem[6]) 

//Class add remove

list.classList.add("test")
list.classList.remove("test")

//Attribute add and remove

let val4 = list.hasAttribute("titile") //checking if present or not
list.setAttribute("title", "new title") //adding attribute
list.removeAttribute('title')

console.log(val4);



