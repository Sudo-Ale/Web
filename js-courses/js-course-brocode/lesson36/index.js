// spread operator = allows an iterable such as an
// ...               array of string to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacks the elements)

let nameProva = "Alessio";
console.log(...nameProva);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log(...numbers);

let maxNum = Math.max(...numbers);
console.log(maxNum);

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(...class2);
console.log(...class1);