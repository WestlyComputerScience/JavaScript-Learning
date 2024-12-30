// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.
//
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------
//Our unordered lists have 3 elements in them each
//Our unordered list are the parents with 3 childs (Ex: in fruits the apple element is the firstborn child and kiwi is the lastborn child)

const element = document.getElementById("fruits"); //grabs the fruits ul
const firstChild = element.firstElementChild; //grabs apple
firstChild.style.backgroundColor = "lightGreen"; //changes apple's background to light green

//or

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => { //changes all first kids to yellow background
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
}); //Note: querySelectorAll returns a node list (which has built in for each loop), so no worry about typecast to array


// ---------- .lastElementChild ----------
//grabs the last created child

const element1 = document.getElementById("vegetables");
const lastChild = element1.lastElementChild;
lastChild.style.backgroundColor = "lightBlue";

//or

const ulElements1 = document.querySelectorAll("ul");

ulElements1.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "green";
})

// ---------- .nextElementSibling ----------

const element6 = document.getElementById("Donuts");
const nextSibling = element6.nextElementSibling; //Grabs the next sibling in the list
nextSibling.style.backgroundColor = "purple";

//or if you grab a list instead

const element7 = document.getElementById("fruits");
const nextSibling1 = element7.nextElementSibling; //Grabs the next sibling in the list
nextSibling1.style.backgroundColor = "purple";

// ---------- .previousElementSibling ----------

const element9 = document.getElementById("kiwi");
const prevSibling = element9.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

//or if you grab list

const element11 = document.getElementById("desserts");
const prevSibling1 = element11.previousElementSibling;
prevSibling1.style.backgroundColor = "lightGreen";

// ---------- .parentElement ----------

const element16 = document.getElementById("apple");
const parent = element16.parentElement;
parent.style.backgroundColor = "blue";

// ---------- .children ----------

const element21 = document.getElementById("desserts");
const children = element21.children;
console.log(children); //returns HTML Collection of 3 elements

Array.from(children).forEach(child => { //typecast since it's an HTML Collection
    child.style.backgroundColor = "orange"; //makes all children orange
})
