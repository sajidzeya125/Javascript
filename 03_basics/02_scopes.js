
let a=900
if(true){
let a=10
const b=20
var c=30
// console.log("Inner: ",a);

}


console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username="Sajid"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}

one()



// +++++++++++interesting++++++++++


function addone(num){
    return num+1
}
addone(9)

const addTwo=function(num){
    return num+2
}

addTwo(9)

