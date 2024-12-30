// operands (values, variables, etc.)
// operators ( + - / * % **)

let students = 30;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 4;
students = students ** 3; // ** is for exponents
students = students % 71;

students += 1;
students -= 3;
students *= 2;
students /= 6;
students **= 7;
students %= 1873;

students++; //uses, then adds
students--;
++students; //adds then uses
--students;


/*
    Operator precedence:
    1. paranthesis ()
    2. exponents
    3. multiplication, division and modulus
    4. addition and subtraction
*/
let result = 1 + 2 * 3 + 4 ** 2;

console.log(students);
console.log(result);