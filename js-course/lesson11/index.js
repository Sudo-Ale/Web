// useful string methods

let username = "Ale May";

console.log(username.length);
console.log(username.charAt(4));
console.log(username.indexOf("A"));
console.log(username.lastIndexOf("a"));
console.log(username.trim());
console.log(username.toLowerCase());
console.log(username.toUpperCase());

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);