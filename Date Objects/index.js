// Date Objects = Objects that contain values that represent dates and times. 
//                These date objects can be changed and formatted.

const date = new Date();

console.log(date); //gives the current time: Tue Dec 24 2024 17:23:58 GMT-0600 (Central Standard Time)

//Date(year, month, day, hour, minute, second, milisecond (ms))

const date1 = new Date(2024, 0, 1, 2, 3, 4, 33); //make our own date
console.log(date1);

const date2 = new Date("2024-01-02T12:00:00Z"); //year-month-secondTime00:00:00
console.log(date2);

const date3 = new Date(17000000000000); //give me the time after 1.7 (maybe trillion) seconds after the current time
console.log(date3);

const year = date.getFullYear();
console.log(year); //recieves the year from a date

const month = date.getMonth();
console.log(month); //recieves the month from a date

const day = date.getDate();
console.log(day); //recieves the day from a date

const hour = date.getHours();
console.log(hour); //recieves the hour from a date

const minutes = date.getMinutes();
console.log(minutes); //recieves the minutes from a date

const seconds = date.getSeconds();
console.log(seconds); //recieves the seconds from a date

const ms = date.getMilliseconds();
console.log(ms); //recieves the miliseconds from a date

const dayOfWeek = date.getDay();
console.log(dayOfWeek); //recieves the number day of the week (2 as in Tuesday) (0 for Sunday)

date.setFullYear(2024); //changes year

date.setMonth(0); //changes year

date.setDate(1); //changes day

date.setHours(3); //changes hours

date.setMinutes(16); //changes minutes

date.setSeconds(32); //changes seconds

date.setMilliseconds(218); //changes minutes

console.log(date);

const date7 = new Date("2023-12-31");
const date8 = new Date("2024-01-01");

if(date8 > date7) //based on which one is further in time
{
    console.log("Happy New Year!");
}
