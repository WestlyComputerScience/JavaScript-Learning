// fetch = Function used for making HTTP requests to fetch resources (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve
//         and send data asynchronously over the web.
//
//         fetch(url, {options})                  or more advanced ----> fetch(url, {method: "GET"})

//HTTP response status codes (aka the status)
// 1. informational responses (100-199)
// 2. successful responses (200-299)
// 3. redirection messages (300-399)
// 4. client error responses (400-499)
// 5. server error responses (500-599)

//ok property ----> was fetching the resource okay?

//----------------------------------------BASIC----------------------------------------

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu") //body is the data we're looking for
//       .then(response => response.json()) //the response only has the object
//       .then(data => console.log(data)) //this grabs all the data we're looking for
//       .catch(error => console.error(error));

//--------------------------------------------------------------------------------

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//       .then(response => {

//             if(!response.ok) //if we couldn't find the response
//             {
//                 throw new Error("Could not fetch resource");
//             }
//             return response.json();
//       })
//       .then(data => console.log(data))
//       .catch(error => console.error(error));

//--------------------------------------Do it with async/await------------------------------------------

async function fetchData()
{
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok)
        {
            throw new Error("Could not fetch pokemon");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("pokemonSprite");

        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";

    }
    catch(error)
    {
        console.error(error);
    }
}
