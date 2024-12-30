// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img"); //selects all images from the slides class
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider); //once all content loads, intialize the image slider    (something, callback)

function initializeSlider() //when you boot up the webpage
{
    if(slides.length > 0) //if we have images
    {
        slides[slideIndex].classList.add("displaySlide"); //makes it visible
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index) //shows and hides slides
{

    if(index >= slides.length)
    {
        slideIndex = 0; //goes back to beginning
    }
    else if(index < 0)
    {
        slideIndex = slides.length - 1; //goes to the end
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); //hides the old images
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() //goes to previous slide
{
    clearInterval(intervalId); //stops the interval from happening so you can look at the image
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() //goes a slide forward
{
    slideIndex++;
    showSlide(slideIndex);
}
