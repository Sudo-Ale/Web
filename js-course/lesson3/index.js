// arithmetic expression

/*
    arithmetic expression is a combination of:
        operands (values, variables, etc.)
        operatorts (+ - * / %)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;

//let extraStudents = students % 5;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & substraction
*/

let result = 1 + 2 * (3 + 4);
console.log(result);