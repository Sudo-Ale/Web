// arrow function = compact alternative to a traditional function expression
//  =>

const greeting = (username) => console.log(`Hello ${username}`);
greeting("May");

const percent = (x, y) => x / y * 100;
console.log(`${percent(37, 50)}%`);


let grades = [100, 90, 50, 60, 70];
grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));