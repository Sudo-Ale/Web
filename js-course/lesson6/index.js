// const = a variable that can't be changed

const PI = 3.14159;
let radius, circumference;

radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);

//PI = 420.59;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);