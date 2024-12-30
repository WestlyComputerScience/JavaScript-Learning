//----------------NUMBER GUESSING GAME----------------

const minNum = 1;
const maxNum = 100;

//Note: Math.floor rounds down
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running)
{
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess); //must convert string input to number

    if(isNaN(guess))
    {
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum)
    {
        window.alert("Please enter a valid number");
    }
    else
    {
        attempts++;
        if(guess < answer)
        {
            window.alert("TOO LOW! Hahah! Try again!");
        }
        else if(guess > answer)
        {
            window.alert("TOO HIGH! Hahah! Try again!");
        }
        else
        {
            window.alert(`Man you got me. . .CORRECT! The answer was ${answer}, it took you ${attempts} attempts`);
            running = false;
        }
    }
}

//console.log(typeof guess, guess); //It only gives string values from input