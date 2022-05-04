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

//Links
val = document.links;
val = document.links[0];

console.log(val)


//images
val = document.images;

//Scripts
val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

console.log(val)

//For each in Link
links= document.links;
let linkArray = Array.from(links);

linkArray.forEach(function(link){
    console.log(link);
});



