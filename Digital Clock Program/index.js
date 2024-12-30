// DIGITAL CLOCK PROGRAM

function updateClock()
{

    const now = new Date();
    let hours = now.getHours();

    const meridiem = hours >= 12 ? "PM" : "AM"; //fixes the military clock
    hours = hours % 12 || 12; //if 0 it uses 12
    hours = hours.toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2, 0); //padStart() = makes the first 2 characters of a string 0 (how many characters, pad them with what?)
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000); //call a function repeatedly, (every 1 second)
