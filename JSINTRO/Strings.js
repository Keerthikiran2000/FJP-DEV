//String is a sequence of characters
let str="Pepcoders"

//String Methods
//length of a string ->length
console.log(str.length)

//to extract the string
//slice(start,end+1)
console.log(str.slice(3,7))
console.log(str.slice(3,8))

//substr(start,length of string from start index)
console.log(str.substr(3,4))
let sayHello="Hello Keerthi"

//Replacing String Content
//replace(String to be replaced,String to be replaced with)
sayHello=sayHello.replace("Hello","Bye")
console.log(sayHello)

//ToUpperCase and ToLowerCase
let text1="uppercase"
let text2="LOWERcase"
console.log(text2.toLowerCase(),text1.toUpperCase())
//concatenation of String->concat method
let firstString="Hello"
let secondString="Bhai"
let concatedString=firstString.concat(" "+secondString," ","KeerthiKiran")
console.log(concatedString)
//Trim the String->trim() method
let text="    Hello World    "
text=text.trim();
console.log(text)
