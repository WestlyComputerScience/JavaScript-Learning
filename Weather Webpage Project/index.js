// WEATHER WEBPAGE

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "52f975f9d39da4dfc86a686152d58546";

weatherForm.addEventListener("submit", async event => { //async arrow function to allow usage of await

    event.preventDefault(); //don't want to refresh the page

    const city = cityInput.value;

    if(city)
    {
        try
        {
            const weatherData = await getWeatherData(city); //retreives the weather data JSON object
            displayWeatherInfo(weatherData); //attempts to display weather data
        }
        catch(error)
        {
            console.error(error); //for the console
            displayError(error); //for webpage users
        }
    }
    else
    {
        displayError("Please enter a city");
    }

});

async function getWeatherData(city)
{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; //using the city api for the weather, make a url to the city object

    const response = await fetch(apiUrl); //can use await since inside arrow function from above

    if(!response.ok)
    {
        throw new Error("Could not fetch weather data for your city");
    }

    return await response.json(); //returns a json object
}

function displayWeatherInfo(data) //data in JSON format
{
    const {name: city, //have these variables after destructuring
           main: {temp, humidity}, 
           weather: [{description, id}] } = data; //object destructuring (nested) with array destructuring

           card.textContent = ""; //reset older text (Ex: previous erro message)
           card.style.display = "flex";

           const cityDisplay = document.createElement("h1");
           const tempDisplay = document.createElement("p");
           const humidityDisplay = document.createElement("p");
           const descriptionDisplay = document.createElement("p");
           const weatherEmoji = document.createElement("p");

           cityDisplay.textContent = city; //grabbed from object destructuring
           tempDisplay.textContent = `${((temp - 273.15) * 9/5 + 32).toFixed(1)}°F`;
           humidityDisplay.textContent = `Humidity: ${humidity}%`;
           descriptionDisplay.textContent = description;
           weatherEmoji.textContent = getWeatherEmoji(id); //gets a weather id emoji from our below function

           cityDisplay.classList.add("cityDisplay"); //adds the CSS class to it
           tempDisplay.classList.add("tempDisplay");
           humidityDisplay.classList.add("humidityDisplay");
           descriptionDisplay.classList.add("descriptionDisplay");
           weatherEmoji.classList.add("weatherEmoji");
           
           card.appendChild(cityDisplay); //adds it to the card
           card.appendChild(tempDisplay);
           card.appendChild(humidityDisplay);
           card.appendChild(descriptionDisplay);
           card.appendChild(weatherEmoji);
}

//Use this link to find the weather condition codes: https://openweathermap.org/weather-conditions
function getWeatherEmoji(weatherId)
{

    switch(true)
    {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId > 800 && weatherId < 810):
            return "☁️";
        default:
            return "❓"; //incase it's a code not mentioned
    }

}

function displayError(message)
{
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
