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




