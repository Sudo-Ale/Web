// toLocaleString() = returns a string with a language
//                    sensitive representation of this number

// number.ToLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in)
// 'options' = object with formatting options

let myNum = 100;

// myNum = myNum.toLocaleString("en-US"); //us
// myNum = myNum.toLocaleString("hi-IN"); //hindi
// myNum = myNum.toLocaleString("de-DE"); //ger
// myNum = myNum.toLocaleString("it-IT");

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency:"USD"});
// myNum = myNum.toLocaleString("it-IT", {style: "currency", currency:"EUR"});

// myNum = myNum.toLocaleString(undefined, {style:"percent"});

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);