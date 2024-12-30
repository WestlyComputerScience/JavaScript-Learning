// while loop = repeat some code WHILE some condition is true


//---------WHILE LOOP-----------------

// let username = "";
// while(username === "" || username === null) //null for when you hit cancel
// {
//     username = window.prompt(`Enter your username: `); //do until enter something
// }


//-------------DO-WHILE LOOP----------

//In a DO-WHILE loop, you do the operator, then you check the while statement
//Note: don't need to asign username!

// let username;
// do{
//     username = window.prompt(`Enter your username: `); //do until enter something
// }while(username === "" || username === null)

// console.log(`Hello ${username}`);


//----------WHILE LOOP EXAMPLE-------

let loggedIn = false;
let username;
let password;

while(!loggedIn) //could do a do-while loop as well
{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword")
    {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else
    {
        console.log("Invalid credentials! Please try again");
    }
}