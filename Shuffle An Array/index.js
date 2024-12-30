//shuffle an array

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

//cards.sort(() => Math.random() - 0.5); //very inificient

//Use the Fisher-Yates algorithm instead!

function shuffle(array)
{
    for(let i = array.length - 1; i > 0; i--)
    {
        const random = Math.floor(Math.random() * (i + 1)); //random num between end and beginning (Math.floor() rounds it down to be values 0 to i)

        [array[i], array[random]] = [array[random], array[i]]; //uses destructuring to swap elements in array
    }
}

shuffle(cards);
console.log(cards);
