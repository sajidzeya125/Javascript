const name="Sajid"
const repoCount= 10


// console.log(name+ repoCount+" Value");

const gameName= new String('Project IGI')

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('G'));


const newString=gameName.substring(0,4)
console.log(newString);


const anotherString=gameName.slice(-8,7)
console.log(anotherString);


const newString1="    Sajid    "
console.log(newString1);
console.log(newString1.trim());


const url="https://sajid.com/sajid%10zeya"

console.log(url.replace('%10','-'));

console.log(url.includes('zeya'));

console.log(gameName.split('I'));


 







