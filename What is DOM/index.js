// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically change the content,
//       structure, and style of a webpage.

document.title = "My website"; //changes the title of a document
document.body.style.backgroundColor = "hsl(0, 0%, 15%)"; //changes background color

console.log(document); //shows all the html code on the console
console.dir(document); //dir = directory (shows all the properties of the object)

const username = "Westly";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;