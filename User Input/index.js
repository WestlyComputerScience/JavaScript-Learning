
//How to accept user input

//1. EASY WAY = window prompt
//2. Professional way = HTML textbox


//---------EASY WAY--------------
/*
let username = window.prompt(`What's your username?`); //gives prompt for username

console.log(username);
*/

document.getElementById("mySubmit").onclick = function() //mySubmit is the ID of the button, onclick is when you click the button
{
    //when we click on the button, the below performs
    username = document.getElementById("myText").value; //myText is the input, .value for the value of the input
    //console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`; //changes the header element
}