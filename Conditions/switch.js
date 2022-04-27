//switch baically works on a choice variable
console.log("Switch starts from here")

console.log(`Select an option:
    a. Option 1
    b. Option 2
    c. Option 3`)

choice = prompt();
var text;

switch(choice){
    case "a":{
        text="You have selected option 1"
        break;
    }

    case "b":{
        text="You have selected option 2"
        break;
    }

    case "c":{
        text="You have selected option 3"
        break;
    }

    default:{
        text="You have selected no option or something else"
        break;
    }

}

console.log(text)

