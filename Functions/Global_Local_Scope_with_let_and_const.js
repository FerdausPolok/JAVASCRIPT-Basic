console.log("Global and Local Scope with let and const Starts from here")

var a= 10;
a=a+7;

var a; //abr o a niye kaj kora jacche

let b =10;
b= b+10;

//let b; //we can't declare same variable again using let

const c =10;

//c=10.5; //We can't even reassaign them!

//Global scope

var vr=1;
let lt=2;
const con=3;
var d =10;

console.log(`Global Scope: `,vr,lt,con)

function test(){
    //local scope
    var vr=4;
    let lt=5;
    const con=6;

    console.log(`Local Scope: `,vr,lt,con) //ulta ta possible hobe na
    console.log(`A Value from Global Scope: `,d)

}

test();
console.log(`Global Scope: `,vr,lt,con)


//if and for

if (true){ //if er vetor var change hole Globally change hoye jabe
    var vr=7;
    let lt=8;
    const con=9;
    console.log(`If Scope: `,vr,lt,con)
    
}

console.log(`Global Scope: `,vr,lt,con)

//same goes for for

for(var vr =0; vr<10; vr++){
    console.log(`Loop Scope: `,vr)
}

console.log(`Global Scope: `,vr,lt,con)

