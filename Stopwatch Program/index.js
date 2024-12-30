// STOPWATCH PROGRAM

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elaspedTime = 0;
let isRunning = false;

function start() //Epic = is when your computer thinks time began, 
{

    if(!isRunning)
    {
        startTime = Date.now() - elaspedTime; /*Gets the date - the time you hit start on the button (big number)*/
        timer = setInterval(update, 10); /*Set interval to 10 miliseconds every time you update it*/
        isRunning = true;
    }
}

function stop()
{
    if(isRunning)
    {
        clearInterval(timer); /*Stops it from updating*/
        elaspedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset()
{
    clearInterval(timer);
    startTime = 0;
    elaspedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update()
{
    const currentTime = Date.now();
    elaspedTime = currentTime - startTime; /*The change in time is the current Date.now() - the start time*/

    let hours = Math.floor(elaspedTime / (1000 * 60 * 60)); /*miliseconds * seconds * minutes*/
    let minutes = Math.floor(elaspedTime / (1000 * 60) % 60); /*miliseconds * seconds % don't want it to go above 60*/
    let seconds = Math.floor(elaspedTime / 1000 % 60); /*miliseconds % don't want it to go above 60*/
    let miliseconds = Math.floor(elaspedTime % 1000 / 10); /*% don't want it above 1000 / 10 (first 2 digits)*/

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
