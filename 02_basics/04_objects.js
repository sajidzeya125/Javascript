// Sigleton

const tinderUser = new Object()

tinderUser.id="123abc"
tinderUser.name="Suyash"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email: "abs@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Sajid",
            lastname: "zeya"
        }
    }
}
// console.log(regularUser.fullName.userfullname.lastname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2}
console.log(obj3);

const obj4=Object.assign({},obj1,obj2)
console.log(obj4);


const obj5={...obj1,...obj2}
console.log(obj5);


const users=[
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    }
]
console.log(users[1].email);



console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course ={
    coursename:"js in hindi",
    price: "3333",
    courseInstructor: "Sajid"
}


const {courseInstructor: instructor}=course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "Sajid",
//     "coursename": "Js in Hindi",
//     "price": "Free"
// }


[
    {},
    {},
    {}
]








