// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup (also have kepress, but not compatible with all web browsers)
//
//                 document.addEventListener(event, callback)

//----------------InitialInfo----------------

// document.addEventListener("keydown", event => { //when key is held down
//     console.log(`Key down = ${event.key}`);
// });

// document.addEventListener("keyup", event => { //when key is lifted up
//     console.log(`Key up = ${event.key}`);
// });



// document.addEventListener("keydown", event => {
//     myBox.textContent = "🏃‍♂️‍➡️";
//     myBox.style.backgroundColor = "tomato";
// })

// document.addEventListener("keyup", event => {
//     myBox.textContent = "😎";
//     myBox.style.backgroundColor = "lightBlue";
// })

//----------------Program----------------

const myBox = document.getElementById("myBox");
const moveAmount = 5;
let x = 0; //horizontal movement
let y = 0; //vertical movement

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) //if the key pressed starts with arrow
    {

        event.preventDefault(); //stops the scroll bar from appearing when going off screen

        switch(event.key)
        {
            case "ArrowUp":
                y -= moveAmount;
                myBox.textContent = "🏃‍♂️‍➡️";
                myBox.style.backgroundColor = "tomato";
                break;
            case "ArrowDown":
                y += moveAmount;
                myBox.textContent = "🏃‍♂️‍➡️";
                myBox.style.backgroundColor = "tomato";
                break;
            case "ArrowLeft":
                x -= moveAmount;
                myBox.textContent = "🏃‍♂️‍➡️";
                myBox.style.backgroundColor = "tomato";
                break;
            case "ArrowRight":
                x += moveAmount;
                myBox.textContent = "🏃‍♂️‍➡️";
                myBox.style.backgroundColor = "tomato";
                break;
        }

        myBox.style.top = `${y}px`; //changes the top property (aka updates the coordinates)
        myBox.style.left = `${x}px`; //changes the left property (aka updates the coordinates)
    }
})

document.addEventListener("keyup", event => {
    myBox.textContent = "😎";
    myBox.style.backgroundColor = "lightBlue";
})
