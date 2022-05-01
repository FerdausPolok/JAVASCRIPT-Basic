console.log("Function in Array Iteration Starts from here")

//using for each loop to iterating Array

fruits=["Mango", "Bananna", "Orange", "Apple"]
numbers=[1, 2, 9]

//first parameter: Item
//2nd parameter: index
//3rd parameter: Full array
fruits.forEach(function(item,index,arr) {
    console.log(`${index} = ${item}`)
});

//same job separately

function PrintEveything(item,index,arr) {
    console.log(`${index} = ${item}`)
}

numbers.forEach(PrintEveything);

//Array iteration Using Mapping 

function AddSomething(item){
    return `${item} is a Fruit`;
}

arrRes= fruits.map(AddSomething);

console.log(arrRes)


//For each just iterate kore
//Map iterate + update korte pare

//make a new array which will hold the square values of the elements of numbers array at top

function square(item){
    return item**2
}

newNumbers = numbers.map(square);
console.log(newNumbers)
