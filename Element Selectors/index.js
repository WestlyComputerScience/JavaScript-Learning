// element selectors = Methods used to target and manipulate HTML elements.
//                     They allows you to select one or multiple HTML elements from the DOM (Document Object Model)
//
// 1. document.getElementById()      // ELEMENT OR NULL
// 2. document.getElementsByClassName() //HTML COLLECTION (similar to array)
// 3. document.getElementsByTagName() //HTML COLLECTION (similar to array)
// 4. document.querySelector()       //ELEMENT OR NULL
// 5. document.querySelectorAll()    //NODELIST


//1.
//Grabs an element based on the specified ID
const myHeading = document.getElementById("my-heading"); //returns null if not found
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading); //displays HTML element: <h1 id="my-heading" style="background-color: yellow; text-align: center;">Food Inc.</h1>

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//2.
//grabs all elements by class name (Ex: we sometimes have a container class, it would grab everything related to that)

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "lightGreen"; //changes the index 1 of the collection

for(let fruit of fruits)
{
    fruit.style.textAlign = "center";
}

//fruits.forEach(); //HTML collections don't have a forEach() method, gives error

Array.from(fruits).forEach(fruit => { //from typecasts fruits (HTML COLLECTION) as an array
    fruit.style.backgroundColor = "lightGreen";
}); //typecast HTML collection as an array

console.log(fruits);

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//3.
//Grabs all the elements related to the tag names (Ex: h1, divs, ul)

const h4Elements = document.getElementsByTagName("h4"); //It's grabbing all elements related to things like h4 (heading 4) or ul (unordered list)
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "lightGreen";

for(let h4Element of h4Elements)
{
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements)
{
    liElement.style.backgroundColor = "lightGreen";
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "lightBlue";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightGrey";
});

console.log(h4Elements);

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//4.
//returns the first matching element or null if not found

const element = document.querySelector(".fruits"); //Note: .fruits for .className

element.style.backgroundColor = "lightGrey"; //changes Apple since it's the first common element!

const element1 = document.querySelector("h4"); //changes Root Vegetables since that's the first occurence of a h4 element

element1.style.backgroundColor = "lightGreen";

const element2 = document.querySelector("ol"); //don't have any so it returns null

console.log(element2);

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//5.
//NODELIST = kinda like an HTML COLLECTION, but with all the methods instead (HTML COLLECTIONS are live (update automatically in the DOM)) (NODELISTS are static (DO NOT update automatically in the DOM))

const fruits1 = document.querySelectorAll(".fruits"); //grabs all fruits class elements

fruits1[1].style.backgroundColor = "red";

console.log(fruits1); //gives you a node list with 3 elements

fruits1.forEach(food => {
    food.style.textAlign = "right";
});
