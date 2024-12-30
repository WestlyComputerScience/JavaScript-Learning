// If Statements

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function()
{
    age = myText.value;
    age = Number(age); //converts it from string to age!
    if(age >= 100)
    {
        resultElement.textContent = `You're to old to enter this site`;
    }
    else if(age == 0)
    {
        resultElement.textContent = `You can't enter. You were just born.`;
    }
    else if(age >= 18)
    {
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0)
    {
        resultElement.textContent = `You age can't be below 0`;
    }
    else
    {
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}

if(age > 18)
{
    console.log(`You're old enough to enter this site`);
}
else if (age == 18)
{
    console.log("You're an adult now!")
}
else
{
    console.log("You're too young for this site");
}
