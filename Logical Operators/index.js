// logical operators = used to combine or manipulate boolean values (true or false)

//                       AND = &&
//                       OR = ||
//                       NOT = !

const temp = 20;

if(temp > 0 && temp <= 30) //AND
{
    console.log("The weather is GOOD");
}
else
{
    console.log("The weather is BAD");
}

if(temp <= 0 || temp > 30) //OR
{
    console.log("The weather is BAD");
}
else
{
    console.log("The weather is GOOD");
}

if(temp != 20) //NOT
{
    console.log("The weather is GOOD");
}
else
{
    console.log("The weather is to lazy for me to change lol");
}