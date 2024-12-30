//-------------------DICE ROLLER PROGRAM-------------------




function rollDice()
{
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++)
    {
        const value = Math.floor(Math.random() * 6) + 1;
        //console.log(value); //used for testing
        values.push(value);
        images.push(`<img src = "ImagesBeingUsed/${value}.png">`); //Note: name all images 1-6 for it to work! //Note: add this at end for screen readers:    alt = "Dice ${value}
    }
    //console.log(values); //used for testing

    diceResult.textContent = `dice: ${values.join(", ")}`; //grabs all array values
    diceImages.innerHTML = images.join(''); //joins all images from array values
}