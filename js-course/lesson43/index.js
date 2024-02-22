
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);
grades.forEach(print);

grades = grades.sort(ascendingSort);
grades.forEach(print);

// will compare 2 numbers at the time
function descendingSort(x, y){ 
    return y - x;
}
function ascendingSort(x, y){ 
    return x - y;
}
function print(element){
    console.log(element);
}