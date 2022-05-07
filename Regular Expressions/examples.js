console.log("Examples")

var re;
var str;

//1. postal code - 4 Digit number
re = /^[0-9]{4}$/
str = "0000"
str = "abcd" 
str = "12345" 

//2. Phone number -> +8801121212121

re = /^\+880([0-9]){10}$/
str = "+880171235939"
str = "+8801712359397"

//3. Phone number-2 -> 01123456789

re = /^01([0-9]){9}$/
str = "0171235939"
str = "01712359397"

//4. Phone number-3 -> +88 optional 01123456789 or +88017123456875 both will work

re = /^(\+)?(88)?01([0-9]){9}$/
str = "+8801712359395"
str = "01712359392"
str = "8801712359395"

//5. Email address

re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

str = "bohu.learn@edu.com.bd"
str = "polokzaman11@gmail.com"
str = "polokzaman11@gmailcom"
str = "p_olok15-9924@diu.edu.bd"


console.log(re.test(str));