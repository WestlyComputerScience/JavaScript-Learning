// NodeList = Static collection of HTML elements by (id, class, element). Can be created using querySelectorAll().
//            Similar to an array, but no (map(), filter(), reduce()). 
//
//            Also: NodeList won't update automatically to reflect changes (if remove element in the DOM, you must also remove it from the NodeList)

let buttons = document.querySelectorAll(".myButtons"); //Note: if constant, can't change elements within it, need let for this example since NodeLists are static (no update automatically)

console.log(buttons); //Side Note: good way to find methods you can use

//ADD HTML/CSS PROPERTIES

buttons.forEach(button => { //make all buttons in NodeList background color's green
    button.style.backgroundColor = "lightGreen";
    button.textContent += "😎"
});

//CLICK event listener

buttons.forEach(button => { //you can easily create event listener for all buttons
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

//MOUSEOVER + MOUSEOUT event listener
//Each adds a mouse event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event =>
    {
        event.target.style.backgroundColor = "hsl(205, 100%, 50%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>
    {
        event.target.style.backgroundColor = "lightGreen";
    });
});

//ADD AN ELEMENT

//Step 1
const newButton = document.createElement("button");

//Step 2
newButton.textContent = "Button 5"; //assign name
newButton.classList = "myButtons"; //assign class         Note: use classList NOT class

//Step 3
document.body.appendChild(newButton); //adds button to document


//----------------------------------PROBLEM!-----------------------------------------------------
console.log(buttons); //DOM has 5 buttons, but NodeList has 4 :(
//NodeLists are a static collection, don't update automatically!

buttons = document.querySelectorAll(".myButtons"); //Don't forget the   .     since it's a class!

console.log(buttons); //NodeList now has 5 elements :)
//-----------------------------------------------------------------------------------------------
//Remove an Element

buttons.forEach(button => { //removes elements from the DOM
    button.addEventListener("click", event => {
        event.target.remove(); //removed, but still within the NodeList, so update it!
        buttons = document.querySelectorAll(".myButtons"); //updates NodeList
        console.log(buttons);
    });
});
