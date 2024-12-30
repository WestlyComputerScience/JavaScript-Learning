// ES6 Module = An external file that contains reusable code that can be imported into other JavaScript files.
//              Write reusable code for many different apps. Can contain variables, class, functions, ...
//              Introduced as part of ECMAScript 2015 update.


//Uses object destructuring      {}
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js'; //Grabbing all the variables and functions from this seperate file

console.log(PI);
const c = getCircumference(10);
const a = getArea(10);
const v = getVolume(10);

console.log(`${c.toFixed(2)}cm`);
console.log(`${a.toFixed(2)}cm^2`);
console.log(`${v.toFixed(2)}cm^3`);
