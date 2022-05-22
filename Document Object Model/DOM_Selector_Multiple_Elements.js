console.log("DOM Selector Multiple Item Starts from here");

//MultiSelector
//document.getElementsByClassName

let list = document.getElementsByClassName('sample-class')
console.log(list);
console.log(list[0]);
list[0].style.color = 'white';
list[0].style.background= 'black'
list[0].style.padding = '10px';
list[0].textContent = 'Hello World!';

//document.getElementsByTagName()

list= document.getElementsByTagName('li')
console.log(list);
console.log(list[6]);

list= document.querySelector('ol').getElementsByTagName('li');
console.log(list);
console.log(list[3]);

//forEach will not work unless we convert it into array

arrr = Array.from(list)
arrr.forEach(element => {
    console.log(element);
});

//document.querySelectorAll()
//id = start with #
//className= Start with .
//Tagname = Tagname in cotation

list = document.querySelectorAll('.sample-class')
list = document.querySelectorAll('li')
list = document.querySelectorAll('ul li')
list = document.querySelectorAll('ol li')
console.log(list);

//quare selector all generates pure array hense foreach works fine
//foreach

list.forEach(element => {
    console.log(element);
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(item =>{
    item.style.background= 'grey'
})
liEven.forEach(item =>{
    item.style.background= 'black'
    item.style.color= 'white'
})


// /console.log("DOM Selector Multiple Item Starts from here");