// variable scope = where a variable is recognized and accessible (local vs global)

let w = 10; //both functions can see this variable

function function1() //x is in this method's scope value : 1
{
    let x = 1;
    let y = 8; //function 2 cannot see this variable
    console.log(x);
}

function function2() //x is in this method's scope value : 1
{
    let x = 2;
    console.log(x);
}

function1();
function2();