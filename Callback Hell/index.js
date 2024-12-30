// Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Uses Promises + async/await to avoid callback hell.

//-----------------------------PROBLEM-----------------------------
//The "All Tasks Complete" statement if being completed before our tasks are done
//Solution, add callbacks to make them wait for each other


function task1(callback) 
{
    setTimeout(() => {
        console.log("Task 1 Complete");
        callback();
    }, 2000); //(callback, time)
}

function task2(callback)
{
    setTimeout(() => {
        console.log("Task 2 Complete");
        callback();
    }, 1000); //(callback, time)
}

function task3(callback)
{
    setTimeout(() => {
        console.log("Task 3 Complete");
        callback();
    }, 3000); //(callback, time)
}

function task4(callback)
{
    setTimeout(() => {
        console.log("Task 4 Complete");
        callback();
    }, 1750); //(callback, time)
}

task1(() => { //nesting callbacks to complete tasks in order
    task2(() => {
        task3(() => {
            task4(() => console.log("All tasks complete"));
        });
    });
});
