//String methods = allow you to manipulate strings

let userName = "Lakebum214    ";

userName.charAt(0); //basic character at _ index
console.log(userName.charAt(0));

userName.indexOf("e"); //returns occurence of an index. Ex: first occurence of e is at index 3
console.log(userName.indexOf("e"));

userName.lastIndexOf("e"); //returns the last occurence of a character
userName.length; //returns the total character count of a string

userName = userName.trim(); //eliminates the whitespace before and after a string, not inbetween!
console.log(userName);

userName = userName.toUpperCase(); //all characters upper case
userName = userName.toLowerCase(); //all characters lower case

userName = userName.repeat(3); //repeats a string 3 times;
console.log(userName);

let result = userName.startsWith("l"); //checks to see if the string starts with a certain character, case specific!
console.log(result);

let result1 = userName.endsWith(" "); //checks to see if the string ends with a certain character

let result2 = userName.includes(" "); //checks to see if any character in username contains it

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", ""); //replaces all characters with something else (want to replace, replace with)
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0"); //(how long the string should be, what to fill in empty space with) Ex: now 15 characters in total, it's padding the front with zeros
console.log(phoneNumber);

phoneNumber = phoneNumber.replaceAll("0", "");
phoneNumber = phoneNumber.padEnd(15, "0"); //adds padding to the end instead
console.log(phoneNumber);
