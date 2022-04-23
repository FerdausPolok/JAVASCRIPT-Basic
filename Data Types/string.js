//Sting needs to be in single or double cotation

a = "Hello 'world'"
console.log(a);

a = "Hello \\ world'"
console.log(a);

a = "Hello \t world'"
console.log(a);

a = "Hello \t\t world'" //\t works like tab
console.log(a);

a = "Hello \nworld'" //\n for new line
console.log(a);

//concat

a='Hello'
b=' world'

c=a+b

console.log(c);

//length of a string

a="asdsd b"

console.log(a.length);

//string inxed

A='Polok'
console.log(A[0])
console.log(A[4])

//Some method of Strings

//upper lower case convert

a="polok"
b=a.toUpperCase();

console.log(b)
console.log(a)

c=b.toLowerCase();
console.log(c)

//trim - removing extra space

x = "            FERDAUS      "
y = x.trim()

console.log(y)
console.log(x)

//slice - Cutting Sting

a = "Ferdaus Zaman Polok"

b=a.slice()
c = a.slice(14,18) //starting Index, before end index
console.log(b)
console.log(c)

c = a.slice(-5,-1) // - dile last theke shuru hobe

console.log(c)

//sub String


p="Polok"

z= p.substr(3,2) //koto theke start, erpor r koto char nibe

console.log(z)

//Replace

z = p.replace("ok", "notOk") //kake replace korbe, ki diye replace korbe

console.log(z) 

//concat - same as plus +

t = "Pol"

console.log(t.concat("ok"))

