console.log("Break and contnues starts from here")

//break - get out
//break helps us to get out from a code block like if and loop

for (var i=1; i<=5; i++){
    console.log("The value is now",i)
    if (i==4){
        break //4 er por r for kaj korbe na means code block theke ber hoye jabe
    }
}

//continue - skip
//continue helps us to skip any code block/ iteration

console.log("Continue")

for (var i=1; i<=5; i++){
   
    if (i==4){
        continue //4 skip hoye porer line a jabe
    }

    console.log("The value is now",i)
}

//print only even from 1-10
console.log("print only even from 1-10")

for (var i=1; i<=10; i++){
   
    if (i%2==1){
        continue ;
    }

    console.log("The value is now",i)
}
