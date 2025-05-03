//primitive


// 7 types:string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3


const isLoggedIn=false
const outsideTemp=null
let userEmail


const id=Symbol('123')
const anotherId=Symbol('123')
const otherId=Symbol('123')

console.log(id==anotherId);


//Reference(Non-Primitive)

//array,objects,functions

const heroes=["shaktiman","dhruv","doga"]
let myObj={
    name: "Sajid",
    age: 21

}

const myFunction=function(){
console.log("hello world");
}

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heroes);

//+++++++++++++++++++++++++++++++++++

//Stack(primitive), Heap(Non-Primitive)

let myName="SajidZeya"

let anotherName=myName
anotherName="Bhiku"
console.log(myName);
console.log(anotherName);

let user1={
    email:"user@gmail.com",
    upi:"user@oksbi"
}

let user2=user1
user2.email="abc@gmail.com"

console.log(user1.email);
console.log(user2.email);






