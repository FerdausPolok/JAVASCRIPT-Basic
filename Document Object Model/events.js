// Events helps us to trigger js code from html


//OnClick's function from html

function message(){
    console.log("Mouse over button");
}

//do the same job in js to get a clear html

let btn = document.getElementById('click');
btn.addEventListener('click', onClickFun) //event name,  function name //on bad diye likhbo

function onClickFun(e){
    console.log("Mouse over button from js");
    console.log(e)

    val = e.timeStamp;

    console.log(val);

}

//form

document.querySelector("#name").addEventListener('focus', test);
document.querySelector("#name").addEventListener('keyup', test2);

function test(e){
    console.log("focued");
    this.style.background = 'pink'
}

function test2(e){
    document.getElementById("demo").innerText= this.value;
}