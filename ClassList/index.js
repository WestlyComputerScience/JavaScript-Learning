// classlist = Element property in JavaScript used to interact with an element's list of classes (CSS classes).
//             Allows you to make reusable classes for many elements accross your webpage
//
// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains

const myButton = document.getElementById("myButton");

//-------------------------------------------Add/Remove------------------------------------------------------------

myButton.classList.add("enabled"); //adds css class to the button               if you hit inspect on it: <button id = "myButton" class = "enabled"></button>
myButton.classList.remove("enabled"); //removes class from the button

// myButton.addEventListener("mouseover", event => //adds the hover class when you mouseover the button
// {
//     event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", event => //removes the hover class when you mouseout the button
// {
//     event.target.classList.remove("hover");
// });

//--------------------------------------------Toggle-----------------------------------------------------------
//Uses toggle to remove or add if class is present or not

// myButton.addEventListener("mouseover", event => //adds the hover class when you mouseover the button
// {
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => //removes the hover class when you mouseout the button
// {
//     event.target.classList.toggle("hover");
// });

//--------------------------------------------Replace-----------------------------------------------------------

// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => { //disabled button (looks wise) after use
//     event.target.classList.replace("enabled", "disabled"); //replace (oldClass, newClass)
// });

//--------------------------------------------Contains---------------------------------------------------------

myButton.classList.add("enabled");

myButton.addEventListener("click", event => { //disabled button (looks wise) after use

    if(event.target.classList.contains("disabled"))
    {
        event.target.textContent += "🤬";
    }
    else
    {
        event.target.classList.replace("enabled", "disabled"); //replace (oldClass, newClass)
    }

});

//--------------------------------------------------------------------------------------------------------------

const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled"); //can add CSS classes to other HTML elements as well!

//myH1 can act like a button too!
myH1.addEventListener("click", event => { //disabled button (looks wise) after use

    if(event.target.classList.contains("disabled"))
    {
        event.target.textContent += "🤬";
    }
    else
    {
        event.target.classList.replace("enabled", "disabled"); //replace (oldClass, newClass)
    }

});

//----------------------------------------------CHALLENGE!-----------------------------------------------------

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover"); //add or removes the hover class
    });
});

//can also do a mouseout, I didn't to represent toggle() better!

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        if(event.target.classList.contains("disabled"))
        {
            event.target.textContent += "🤬";
        }
        else
        {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});
