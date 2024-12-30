//--------------RANDOM PASSWORD GENERATOR--------------

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_+=[]{}\|<>,./?";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";


    //-----TESTS-----
    //console.log(allowedChars);
    if(length <= 0)
    {
        return "(password length must be at least 1)";
    }
    if(allowedChars.length === 0)
    {
        return "(At least 1 set of characters needs to be selected)";
    }

    for(let i = 0; i < length; i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length) + 1;
        password += allowedChars[randomIndex]; //adds character at index _ of string array to string
    }

    return password;
}

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password ${password}`);

