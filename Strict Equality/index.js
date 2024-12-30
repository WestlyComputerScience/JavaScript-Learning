//   = assignment operator
//  == comparison operator (compare if valyes are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
//  !== strict inequality operator

//Note: always use the strict equality operator if you can!

const PI = 3.14;

if(PI == "3.14") //regular comparison operator
{
    console.log("That is PI");
}
else
{
    console.log("That is NOT PI");
}

const PI1 = 3.14;

//Checks if the value and datatype are the same. (int) 3.14 === (String) 3.14 are not equal!
//                                               (int) 3.14 === (int) 3.14 are equal!s
if(PI1 === "3.14") //strict equality operator
{
    console.log("That is PI");
}
else
{
    console.log("That is NOT PI");
}

const PI2 = 3.14

if(PI2 != "3.14") //regular inequality
{
    console.log("That is NOT PI");
}
else
{
    console.log("That is PI");
}

const PI3 = 3.14

if(PI3 !== "3.14") //strict inequality
{
    console.log("That is NOT PI");
}
else
{
    console.log("That is PI");
}