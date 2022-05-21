console.log("Exploring ROM Starts from here");
let val;
val= this; //indicates full html elements
val= window //same as this
val= window.document;
val= document; //works as same as above line
val= document.all; //all tags insiale an array HTMLAllCollection- serially
val= document.all[9]; //Array element
val= document.all.length; //length of the array means how many tags we have inside tha doc

//separately accessing
val = document.head;
val = document.body;
val = document.doctype;
val = document.URL;
val = document.domain;
val = document.characterSet;
val = document.contentType;

//Exploring FORMS
val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;


//Links
val = document.links;
val = document.links[2];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;

//images
val = document.images;

//Scripts
val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

//For each in Link aka on which we get array
links= document.links;
let linkArray = Array.from(links); //age array te covert kore nite hobe

linkArray.forEach(link =>{
     console.log(link);
     //console.log(link.getAttribute('src'));
});


console.log("Exploring ROM Ends from here");



