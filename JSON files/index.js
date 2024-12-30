// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files are typically {key:value} or [value1, value2, value3]   (object or array)
//
//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

//-----------------------------------STRINGIFY---------------------------------------------

const names = ["Spoongebob", "Patrick", "Squidward", "Sandy"];

const jsonString = JSON.stringify(names); //JSON is a built-in object

console.log(names); //in array format
console.log(jsonString); //In string format    "["Spoongebob", "Patrick", "Squidward", "Sandy"]"

const person = {
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies" : ["Jellyfishing", "Karate", "Cooking"]
}

const jsonString1 = JSON.stringify(person);

console.log(person); //outputs object: {name: 'Spongebob', age: 30, isEmployed: true, hobbies: Array(3)}
console.log(jsonString1); //outputs string format: "{"name":"Spongebob","age":30,"isEmployed":true,"hobbies":["Jellyfishing","Karate","Cooking"]}"

const people = [{
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true
}, {
    "name":"Patrick",
    "age": 34,
    "isEmployed": false
}, {
    "name":"Squidward",
    "age": 50,
    "isEmployed": true
}, {
    "name":"Sandy",
    "age": 27,
    "isEmployed": false
}]

const jsonString2 = JSON.stringify(people);

console.log(people); //outputs array of objects
console.log(jsonString2); //outputs a string of each key:value pair in array format

//-------------------------------------------PARSE------------------------------------------

const jsonNames = `["Spoongebob", "Patrick", "Squidward", "Sandy"]`;

const jsonPerson = `{"name":"Spongebob", "age": 30, "isEmployed": true, "hobbies" : ["Jellyfishing", "Karate", "Cooking"]}`

const jsonPeople = `[{"name":"Spongebob", "age": 30, "isEmployed": true}, 
                 {"name":"Patrick", "age": 34, "isEmployed": false}, 
                 {"name":"Squidward", "age": 50, "isEmployed": true}, 
                 {"name":"Sandy", "age": 27, "isEmployed": false}]`

const parsedData = JSON.parse(jsonPeople); //turns a string back into an object

console.log(parsedData);

//-------------------------------------------FETCH------------------------------------------

fetch("person.json") //gets a JSON file (it returns a promise!)
      .then(response => response.json())
      .then(value => console.log(value)); //gets us the object from the json file :D

fetch("people.json") //gets a JSON file (it returns a promise!)
      .then(response => response.json())
      .then(values => values.forEach(value => 
      console.log(value.isEmployed))) //grabs each individuals value from the object, then grabs it's variable
      .catch(error => console.error(error)); //if file not found

