//Asynchronous Programming
//AJAX= Asynchronous JavaScript and XML

//AJAX helps us to get Data without loading

document.getElementById('get_data').addEventListener('click', loadData);

function loadData(){
    //console.log("Button Clicked")
    //create XML HTTP Request - XHR Object

    var xhr = new XMLHttpRequest();
    //console.log(xhr);

    //Open funtion 
    xhr.open('GET', 'data.txt', true);

    //while data loading we show wait msg with onProgress
    xhr.onprogress = function(){
        console.log("data is loading please wait")
    }

    //OnLoad funtion
    xhr.onload= function(){
        //HTTP STATUS
        //200: ok
        //403: Forbidden
        //404: Not Found
        if(this.status == 200){
            console.log(this.responseText);
            document.getElementById('output').innerHTML= `<h4>${this.responseText}</h4>`
        }
    }

    xhr.send();

    //console.log(xhr);

}