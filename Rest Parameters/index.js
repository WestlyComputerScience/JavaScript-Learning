// rest parameters = (...rest) allow a function to work with a variable number of arguments by bundling them into an array
//                          
//                            spread = expands an array into separate elements (unpack them)
//                            rest = bundles seperate elements into an array (pack them back up)

const food1 = "Pizza";
const food2 = "Chile";
const food3 = "Hamburger";
const food4 = "Crab Rangoons";

function openFridge(...foods)
{
    console.log(foods); //Note: if you do     console.log(...foods);      then just prints out all the items, not in array format!
}

function getFood(...foods)
{
    return foods;
}

openFridge(food1, food2, food3, food4); //packs all the strings into an array

const foods = getFood(food1, food2, food3, food4); //makes them back into an array

console.log(foods);

function sum(...num) //adds numbers
{
    let result = 0;
    for(let number of num)
    {
        result += number;
    }
    return result;
}

const total = sum(1, 5, 7, 4, 33);
console.log(`Your total is $${total}`);

function getAverage(...num) //calculate average
{
    let result = 0;
    for(let number of num)
    {
        result += number;
    }
    return result / num.length; //calculates average
}

const total1 = getAverage(99, 87, 65, 33, 76, 55, 86, 84, 73);
console.log(`Your average is ${total1.toFixed(2)}%`);




function combineStrings(...strings) //join strings together
{
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);