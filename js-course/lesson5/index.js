// Type conversion = change the dataype of a value to another
//                   (strings, numbers, booleans)

let age = window.prompt("How old are you?");
age += 1;

console.log(typeof(age))    //string
age = Number(age)
console.log(typeof(age))    //number


console.log("You are", age, "years old")

let x, y, z;
x = Number("3.14"); // if u try to convert into a number something that can't be a number then => NaN
y = String(3.14);
z = Boolean("qwer");    //if is an empty string then false, else true

console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(z, typeof(z));