// callback = a function that is passed as an argument to another function

//            used to handle asynchronous operations
//            1. Reading a file
//            2. Network requests
//            3. Interacting databases

//            "Hey, when you're done, call this next."




//--------------------------------------------------------

hello(goodbye); //waits until hello goes until it goes

/*
function hello()
{
    setTimeout(function () { //waits 3 seconds to process
        console.log("Hello!");
    }, 3000);
}
*/

function hello(callback) //after this function is complete, calls goodbye method
{
    console.log("Hello!")
    callback(); //calls goodbye after it
}


function goodbye()
{
    console.log("Goodbye!");
}


//--------------------------------------------------------



function sum(callback, x, y)
{
    let result = x + y;
    callback(result); //calls the display method to print out result
}

function display(result)
{
    console.log(result);
}

function displayOnWebpage(result)
{
    document.getElementById("myH1").textContent = result;
}

sum(display, 3, 4);

sum(displayOnWebpage, 9, 4);