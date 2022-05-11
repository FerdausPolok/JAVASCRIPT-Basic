//fetching data via API-AJAX


document.getElementById('get_data2').addEventListener('click', loadJokes);

function loadJokes(e){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',"http://api.icndb.com/jokes/random", true)

    xhr.onload = function(){
        if (this.status ===200){
            data= JSON.parse(this.responseText)
            console.log(data)
            //accessting the Joke
            joke = data.value.joke;
            console.log(joke)
            //Posting the Joke on Front-end
            document.getElementById('output2').innerHTML= `${joke}`
        }
    }

    xhr.send();

}

//fetching n number of data from controlled api

document.getElementById('get_data3').addEventListener('click', loadJokes);

function loadJokes(e){
    var xhr = new XMLHttpRequest();
    var numberOdJokes = document.getElementById('num').value;

    xhr.open('GET',`http://api.icndb.com/jokes/random/${numberOdJokes}`, true)

    xhr.onprogress = function(){
        document.getElementById('output3').innerHTML = "<h3>Loading............</h3>";
    }

    xhr.onload = function(){
        if (this.status ===200){
            data= JSON.parse(this.responseText)
            arrayData= data.value;
            console.log(arrayData);

            output="<ol>";
            for (i=0; i<arrayData.length;i++){
                console.log(arrayData[i].joke)
                output+=`<li>${arrayData[i].joke}</li>`
            }
            output+="</ol>";

            document.getElementById('output3').innerHTML = output;
            
            
        }
    }

    xhr.send();

}