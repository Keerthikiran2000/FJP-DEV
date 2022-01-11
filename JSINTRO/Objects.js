//Objects are Key-value pair
let obj={}//object declaration
let person={
    name:'KeerthiKiran',//here name is the key and "KeerthiKiran" is the value
    height:'6ft',
    age:20,
    phonenumber:'9182590938',
    complexion:'dark'
}
console.log(person)
let cap={
    firstname:"Steve",
    lastname:"Rogers",
    isAvenger:true,
    friends:['Thor','IronMan','Hulk'],
    age:102,
    address:{
        state:"Texas",city:"Dallas"
    },
    sayHi:function()
    {
        console.log("Captain Says HI")
    }
}
//Accessing properties using Dot notation 
console.log(cap)
console.log(cap.firstname,"  ",cap.lastname," ",cap.age)//to access the property of object
console.log(cap.friends[0]," ",cap.address.state)
console.log(cap.sayHi())
//bracket notation
console.log(cap['firstname'])
//for in loop
for(let x in cap)
console.log("key "+x+" value "+cap[x])
//to update the property
cap.isAvenger=false;
//to add a property in object
cap.movies=['captian America',"The HULK"]
//to delete a property
delete cap.age;
console.log(cap);