// function = A section of reusable code.
//            Declare a code once and use it whenever you want.
//            Call the function to execute the code.

function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Westly", 19); //call function by typing it's name
happyBirthday("Blake", 100);

function add(x, y){
    let result = x + y;
    return result; //now returns a value where the method call happens
    //or --->     return x + y;
}

console.log(add(2, 3));

function isEven(number)
{
    if(number % 2 === 0)
    {
        return true;
    }
    else{
        return false;
    }
    //or the ternary operator(?)
    //return number % 2 === 0 ? true : false;
}

console.log(isEven(12));

function isValidEmail(email){
    if(email.includes("@"))
    {
        return true;
    }
    else{
        return false;
    }

    //or the ternary operator(?)
    // return email.includes("@") ? true : false;
}

console.log(isValidEmail("yuh@notMyEmail.com"));

