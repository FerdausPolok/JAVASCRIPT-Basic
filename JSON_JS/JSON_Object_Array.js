console.log("JSON Obeject and Array")

//Taking JSON Data from external JSON Data File

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
       // console.log(data);
        jsonData(data)
       
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

//function with what we can work with that data

function jsonData (json_obj){
   // console.log(json_obj)
    var json_obj = JSON.parse(json_obj)
    // console.log(json_obj)

    for (x in json_obj.persons){
        //console.log(x)
        var persons = json_obj.persons
        console.log(persons[x])

        for(y in persons[x]){
            console.log(persons[x][y])
        }
    }
}