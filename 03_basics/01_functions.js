// function sayMyName(){
//     console.log("s");
//     console.log("a");
//     console.log("j");
//     console.log("i");
//     console.log("d");
    
// }

// sayMyName()


// function add(number1,number2){
//     console.log(number1+number2);
// }
function add(number1,number2){
    let result=number1+number2
    return result
    
}

const result=add(4,89)

// console.log("Result: ",result);


function loginUserMessage(username="Sam"){
    if(username===undefined){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sajid"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(45,34,222,55));


const user={
    username: "Sajid",
    price: 880
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}

handleObject(user)
handleObject({
    username: "Shakir",
    price: 400
})


const myArray=[200,33,55,56]

function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue(myArray));




