// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time(miliseconds).
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)

//                setTimeout(callback, delay)
//                Additionally (look down): clearTimeout(timeoutId)


// function sayHello()
// {
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000);

//----------------------------------------------------------------------------

// setTimeout(function(){window.alert("Hello")}, 3000); //another way of saying it (anonymous function)

//----------------------------------------------------------------------------

// setTimeout(() => window.alert("Hello"), 3000); //another way of saying it (arrow function)

// //----------------------------------------------------------------------------
// //clearTimeout(timeoutId) = can cancel a timeout before it triggers

// const timeoutId = setTimeout(() => window.alert("Hi!"), 3000); //set it equal to a timeoutId
// clearTimeout(timeoutId); //cancels the timer (the Hi no longer pops up!)

//----------------------------------------------------------------------------

let timeoutId;

function startTimer() //says hello after 3 secs when pressing button
{
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}

function clearTimer() //says hello after 3 secs when pressing button
{
    clearTimeout(timeoutId);
    console.log("Cleared");
}
