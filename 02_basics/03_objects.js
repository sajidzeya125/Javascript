//singleton

// object literals


const mySym=Symbol("key1")


const JsUser={
    name: "Sajid",
    "full name": "Sajid Zeya",
    [mySym]: "myKey1",
    age: 20,
    location: "Delhi",
    email: "sajid@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof mySym);
console.log(JsUser[mySym]);

JsUser.email="avs@gmail.com"
// Object.freeze(JsUser)
JsUser.name="Zeya"
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello User");
    
}
JsUser.greeting2= function(){
    console.log(`Hello User, ${this["full name"]}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());




