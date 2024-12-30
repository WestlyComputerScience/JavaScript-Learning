// eventListener = Listen for specific events to create interactive web poages
//                 events: click, mouseover, mouseout
//
//                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox");

function changeBackgroundColor(event) //event is an object provided to us by the web browser
{
    event.target.style.backgroundColor = "tomato"; //target is what we clicked on
    event.target.textContent = "OUCH! 🤕";
}

//if it's clicked
myBox.addEventListener("click", changeBackgroundColor); //.addEventListener(event, callback); Note: don't need .addEventListener(event, callback(event)), event is provided to us in the background!

// //or
// myBox.addEventListener("click", function(event) //faster
// {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕";
// });
// //or
// myBox.addEventListener("click", event => { //even faster!
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕";
// });

myBox.addEventListener("mouseover", event => { //if mouse over, this happens
    event.target.style.backgroundColor = "yellow"; //target is what we clicked on
    event.target.textContent = "Don't do it 😱";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightGreen"; //target is what we clicked on
    event.target.textContent = "Click Me 😄";
})

//------------------------------------- Button Example ----------------------------------------------------------

const myButton = document.getElementById("myButton");

//If the button is clicked, it changes the box         Note: INSTEAD OF event.target... it's myBox!
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato"; //target is what we clicked on
    myBox.textContent = "OUCH! 🤕";
}
);

myButton.addEventListener("mouseover", event => { //if mouse over, this happens
    myBox.style.backgroundColor = "yellow"; //target is what we clicked on
    myBox.textContent = "Don't do it 😱";
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightGreen"; //target is what we clicked on
    myBox.textContent = "Click Me 😄";
})