// .reduce() = reduce the elements of an array to a single value

const prices = [5, 30, 10, 15, 27, 64, 21];

const total = prices.reduce(sum);

console.log(`Your total is $${total.toFixed(2)}`);

function sum(accumulator, element)
{
    return accumulator + element; //accumulator is the value you update after each call
}

//-----------------------------------------------------------------

const grades = [75, 67, 33, 11, 89, 95, 67];

const max = grades.reduce(getMax);

console.log(max);

function getMax(accumlator, element)
{
    return Math.max(accumlator, element);
}

