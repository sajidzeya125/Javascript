const myArray=[0,1,2,3,4,5]
const myHeroes=['abc','def','ghi']
const arr2=new Array(1,2,34,5,6)

console.log(myArray[0]);

//Array methods

// myArray.push(10)
// myArray.push(7)
// myArray.pop()
// myArray.unshift(90)
// myArray.shift()

// console.log(myArray.includes(67));
// console.log(myArray.indexOf(3));

// const newArr=myArray.join()

// console.log(myArray);
// console.log(typeof newArr);//datatype changed to string

// slice, spice

console.log("A ",myArray);
const myn1=myArray.slice(1,3)

console.log(myn1);
console.log("B ",myArray);

const myn2=myArray.splice(1,3);
console.log("C ",myArray);
console.log(myn2);




