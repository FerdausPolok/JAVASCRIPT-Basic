console.log("Traversing Starts from here")

let val3;
list = document.querySelector('ul'); 
listItem = document.querySelector('ul li:first-child');


val3= list
val3= listItem 

//Get the Child Node
val3 = list
val3 = list.childNodes;
val3 = list.childNodes[0]; //Text for Keyboard enter
val3 = list.childNodes[1];
val3 = list.childNodes[2];
val3 = list.childNodes[1].nodeName;
val3 = list.childNodes[1].nodeType;

//NodeTyoe:
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// Document Itself
// 10 Doctype

//without text node
val3 = list.children;
val3 = list.children[2];

list.children[2] = "Hello"

list.children[1].children[0].innerHTML= `<a href="https://neetcode.io/">NeetCode</a>`

val3= list.children[1].children[0].href;

val3 = list.firstChild;
val3 = list.firstElementChild;
val3 = list.lastChild;
val3 = list.lastElementChild;

val3= list.childElementCount;

val3= listItem
val3= listItem.children
val3= listItem.parentElement;
val3= listItem.parentElement.parentElement;

val3= listItem.nextSibling;
val3= listItem.nextElementSibling;
val3= listItem.nextElementSibling.nextElementSibling;

val3 = document.querySelector('ul li:last-child');
val3= val3.previousSibling;
val3= val3.parentElementSibling;

console.log(val3)