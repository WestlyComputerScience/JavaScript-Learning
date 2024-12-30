// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay"); //grabs all HTML elements
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice)
{

    const computerChoice = choices[Math.floor(Math.random() * 3)]; //random index 0 to 2
    let result = "";

    if(playerChoice === computerChoice) //calculates a tie
    {
        result = "IT'S A TIE!";
    }
    else
    {
        switch(playerChoice) //Calculates a win or loss
        {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "COMPUTER WINS"; //ternary operator
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "COMPUTER WINS"; //ternary operator
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "COMPUTER WINS"; //ternary operator
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`; //updates text content for the choices the player and the computer chose
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText"); //removes any instances of those classes

    //This code below is the same as the above
    // if(resultDisplay.classList.contains("greenText"))
    // {
    //     resultDisplay.classList.remove("greenText");
    // }
    // else if(resultDisplay.classList.contains("redText"))
    // {
    //     resultDisplay.classList.remove("redText");
    // }

    switch(result) //This changes font for resultDisplay and adds score count
    {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "COMPUTER WINS":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}
