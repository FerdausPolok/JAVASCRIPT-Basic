console.log("While loops starts from here")

x= 5
a= 1
while(a<=x){
    console.log("Value of a is",a)
    a++
}

console.log("Out of the loop")

//while willl not work if

while(0){
    console.log("Check Print")
}

while(false){
    console.log("Check Print")
}

//Do while loop- condition last a hobe and akta semicolon hobe

//Do while loop is same as while but will run 1 time even if the condition is false
do{
   console.log("Executing do while loop")

} while(false);

//print 1 to 10 using while loop and print the value is 5 if the value is 5

num=1
console.log(num)
while(num<=10){
    if(num==5){
        console.log("The value is now "+num)
    }
    console.log(num)
    num++
}


//sum of 1 to 10

sum = 0;
s=1;

while(s<=10){
    sum+=s
    s++
}

console.log(`The sum of 1 to 10 is ${sum}`)