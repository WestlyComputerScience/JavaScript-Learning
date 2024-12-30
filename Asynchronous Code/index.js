// synchronous = Executes line by line consecutively in a sequential manner.
//               (aka code that waits for an operation to complete)

// asynchronous = Allows multiple operations to be performed concurrently without wating.
//                Doesn't block the execution flow and allows the program to continue.
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await




// setTimeout( () => console.log("Task 1"), 3000); //An async function that is waiting to be called while other things are running

// console.log("Task 2");
// console.log("Task 3");

//-----------------------------------------------------------------------------------------------------------------------------

function func1(callback)
{
    setTimeout( () => {console.log("Task 1"); callback()}, 3000); //Other operations wait for func1 to complete
}

function func2()
{
    console.log("Task 2");
    console.log("Task 3");
}

func1(func2); //Calls func2 when complete
