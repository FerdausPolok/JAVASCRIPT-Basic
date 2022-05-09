var student = { //object
    name: "Polok",
    id: "172-15-9924",
    add: "Dhaka Bangladesh"
};

console.log(student)

var student_json = { //json format but will be treated as object in js
    "name": "Polok",
    "id": "172-15-9924",
    "add": "Dhaka Bangladesh"
};

console.log(student_json)
console.log(student_json.name)

var student_json_converted = JSON.stringify(student_json)
console.log(student_json_converted)


//Convertibg obj to JSON Using function

var student_json2 = JSON.stringify(student);
console.log(student_json2)

//Reverse can also be done

var student_new = JSON.parse(student_json2)
console.log(student_new)