console.log("Object starts from here")

// we define object using second bracket

var student = { name: "Polok", age: "25", hometown: "Chandpur"} //its like dict of python. Here age, name, hometown are the properties of object student

console.log(student)

// how to access object properties

console.log(student["age"])
console.log(student["name"])
console.log(student["hometown"])

console.log(student.age)
console.log(student.name)
console.log(student.hometown)

//adding new property in object

student["occu"] = "Student"
console.log(student.occu)

student.hobby = "Modding"
console.log(student.hobby)

console.log(student)

//how to delte property

delete student.hobby
console.log(student)
