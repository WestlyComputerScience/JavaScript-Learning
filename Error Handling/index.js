// Error = An Object that is created to represent a problem that occurs.
//         Occur often with user input or establishing a connection

// try { } = Ecloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up ex. close files, close connections, release resources.

//console.lag("Start");
//Network errors
//Promise rejection
//Security errors

try{ //doesn't interrupt the program
    console.log(x);
}
catch(error){
    console.error(error); //doesn't interrupt program
}
finally{
    console.log("This always executes");
}


console.log("You have reached the end!");

//--------------------------------------------------------------------------------------------
//User input

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0) //Not === 0 since all inputs are a string
    {
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)) //NaN = Not a Number
    {
        throw new Error("Values must be a number!");
    }
    
    const result = dividend / divisor;
    console.log(result);
}
catch(error)
{
    console.error(error);
}

console.log("You have reached the end");
