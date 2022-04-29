console.log("Problem solving strats from here")

//create a series of square number upto nth number and show their sum

n = prompt("Please Enter the length of the series/ Enter upto how may square number series you wanr to print")

arr=[];
sum=1
series="1"

for (i=2;i<=n;i++){
    arr[i]= i*i;
    series= series+ " + " + i*i
    sum+=i*i
}

console.log(series+ " = " + sum)