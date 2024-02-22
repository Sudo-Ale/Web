// 2D array = An array of arrays
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

// for(let list of groceryList) {
//     console.log(list);
// }

for(let list of groceryList) {
    for(let food of list){
        console.log(food);
    }
}

// for(let i = 0; i < groceryList.length; i++){
//     console.log(i);
//     for(let item of groceryList[i]){
//         console.log(" -", item);
//     }
// }