// closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
//           Allow for private variables and state maintenance. Used frequently in JS frameworks: React, Vue, Angular

function outer()
{
    let message = "hello";

    function inner()
    {
        console.log(message);
    }

    inner(); //need to call function inside outerfunction to use it
}

//message = "goodbye"; //doesn't work, in a different scope

outer();

//------------------------------------------------------------------------------------------------------------------------------

function increment()
{
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

increment(); //resets everytime when called :(
increment();

//how fix while keeping variable secure? (aka not just static/able to access anywhere in this page)

function createCounter()
{
    let count = 0;

    function increment1()
    {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() //allows access to count
    {
        return count;
    }

    return {increment1, getCount}; //returning an object with the method of increment
}

const counter = createCounter(); //creates a counter object, this object has the method increment

counter.increment1();
counter.increment1();
counter.increment1();

//counter.count = 0;
//console.log(count); //reference error

//console.log(counter.count); //undefined, hidden from us

console.log(`The current count is ${counter.getCount()}`); //allows us to see the hidden variable

//------------------------------------------------------------------------------------------------------------------------------
function createGame() //creates saftey for the score
{
    let score = 0; //security risk, so keep it all enclosed within a function that creates an object

    function increaseScore(points)
    {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points)
    {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore()
    {
        return score;
    }

    return {increaseScore, decreaseScore, getScore}; //gives it access to all inner methods
}

const game = createGame();

game.increaseScore(11);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);
