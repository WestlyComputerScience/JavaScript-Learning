//----------------------Random Number Generator--------------------------

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton:onclick = function()
{
    randomNum1 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    
    randomNum2 = Math.floor(Math.random() * max) + min;
    myLabel2.textContent = randomNum2;
   
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel3.textContent = randomNum3;
}



//-----------------------------How it works-------------------------------
/*
let randomNum = Math.random(); //generates random number between 0 and 1

let randomNum1 = Math.floor(Math.random() * 6) + 1; //floor rounds it down, + 1 for it to be 1-6 and not 0-5

const min = 50;
const max = 100;
let randomNum2 = Math.floor(Math.random() * (max - min)) + min; //50 to 100 with constants

console.log(randomNum);
console.log(randomNum1);
*/