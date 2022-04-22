//Decimal numbers

var x;
x=3.1416
var y=3415
var z = 123e5 //10 to the power

console.log(z);

//left to right kaj kore
//shurute j type pabe shei type er oepration korbe

var a = 10+10+'20'
console.log(a);

var b = "10" + "20" + 30
console.log(b);


//Only + Concat kore but onnanno operator shob normal operation korbe

var c = 10 - 10-'20'
var d = "10" - "20" - 30

console.log(c);
console.log(d);

//infinity is also a number

var e = 100/0
console.log(e)

//Hexadecimal numbers

var hexanum = 0xBB
console.log(hexanum);

//a method to covert something into string

var hexanumstr= hexanum.toString();

console.log(hexanum);
console.log(hexanumstr);


var g=187
console.log(g);

gStrBnry = g.toString(16); //1st bracket a dite hobe base 2/8/10/16

console.log(gStrBnry);

//Precision - DOshomik er por koto ghor

p = 3.1416
q = p.toPrecision(3)

console.log(q);

//convert Str to Int 

intA = 10
strA = intA.toString()

console.log(intA);
console.log(strA);

backIntA= parseInt(strA); //value flot hole parseFloat use korbo

console.log(backIntA);

//isNaN function - Kono variable number naki number na

var x = "sadsdsd"
console.log(isNaN(x));







