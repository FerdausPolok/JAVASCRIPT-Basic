// Events helps us to trigger js code from html


//OnClick's function from html

function message(){
    console.log("Mouse over button");
}

//do the same job in js to get a clear html

let btn = document.getElementById('click');
btn.addEventListener('mouseover', onClickFun) //event name,  function name //on bad diye likhbo

function onClickFun(){
    console.log("Mouse over button from js");
}