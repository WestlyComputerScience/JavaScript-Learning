//How to Hide and Show HTML

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

//------------------The display none...aka you lose space---------------------

// myButton.addEventListener("click", event => {

//     if(myImg.style.display === "none")
//     {
//         myImg.style.display = "block"; //turns the display for the image back on
//         myButton.textContent = "Hide";
//     }
//     else
//     {
//         myImg.style.display = "none"; //hides the image when pressed, hoever you lose space
//         myButton.textContent = "Show";
//     }
// });

//------------------The visibility way---------------------

myButton.addEventListener("click", event => { //Now when hiding and showing, the button doesn't move!

    if(myImg.style.visibility === "hidden") //switches between hidden and visible
    {
        myImg.style.visibility = "visible"; //turns the display for the image back on
        myButton.textContent = "Hide";
    }
    else
    {
        myImg.style.visibility = "hidden"; //hides the image when pressed, hoever you lose space
        myButton.textContent = "Show";
    }
});
