// String slicing = creating a substring from a portion of another string
//               Ex: string.slice(start, end)

const fullName = "Bro Code";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8); //or slice(4); //leaving it empty just makes it go to the end

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1); // negative indexes start at the end and go to the front

let firstName1 = fullName.slice(0, fullName.indexOf(" ")); // goes until first index of a space
let lastName1 = fullName.slice(fullName.indexOf(" ") + 1); //goes from space to the end, the + 1 to not include the space

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
console.log(firstName1);
console.log(lastName1);

const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(email);
console.log(`This is your username: ${username}`);
console.log(`This is your extension: ${extension}`);