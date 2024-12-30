//How to Add and Change HTML using JavaScript

// ------------------- EXAMPLE 1 <h1> -------------------

// STEP 1 CREATE THE ELEMENT---------------

const newH1 = document.createElement("h1"); //creates an h1 element

// STEP 2 ADD ATTRIBUTES/PROPERTIES-----------------

newH1.textContent = "I like chile"; //adds text to it
newH1.id = "myH1"; //id = "myH1"       Note: you can inspect it and find that it's id is in fact "myH1"
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM-----------------------

//document.body.append(newH1); //adds h1 element to the DOM
//document.body.prepend(newH1); //adds it to the beginning
document.getElementById("box1").append(newH1); //puts it inside box 1 (prepend for before)

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2) //insertBefore(newElement, currentElement)    Note: This inserts the h1 element between box 1 and 2

// const boxes = document.querySelectorAll(".box"); //if you don't want to access it by ID's
// document.body.insertBefore(newH1, boxes[3]);

// REMOVE HTML ELEMENT-------------------------

// document.body.removeChild(newH1); //removes the instance of the newH1 element           Note: Only works if not inside another thing (Ex: box1)
document.getElementById("box1").removeChild(newH1); //gets rid of newH1 in box1

// ------------------- EXAMPLE 2 <ol> -------------------

// STEP 1 CREATE THE ELEMENT---------------

const newListItem = document.createElement("li"); //creates a new    list item

// STEP 2 ADD ATTRIBUTES/PROPERTIES-----------------

newListItem.textContent = "coconut";

// STEP 3 APPEND ELEMENT TO DOM-----------------------

//document.body.append(newListItem); //outside of the list
//document.getElementById("fruits").append(newListItem); //adds it inside the list   (Note: prepend(newListItem) to put it at #1)

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange); //inserts coconut before orange (aka at #2)

//if no have ID's

const listItems = document.querySelectorAll("fruits");
document.getElementById("fruits").insertBefore(newListItem, listItems[3]); //insert element before any list item (Note: if do it at array[size], it will insert before the size!)

newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightGreen";

// REMOVE HTML ELEMENT-------------------------

document.getElementById("fruits").removeChild(newListItem); //this deletes it from a list
