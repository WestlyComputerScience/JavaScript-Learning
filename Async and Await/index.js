// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise
//
//               Allows you to write aysnchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue

function walkDog()
{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;

            if(dogWalked)
            {
                resolve("You walked the dog 🐕‍🦺");
            }
            else
            {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen()
{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned)
            {
                resolve("You cleaned the kitchen 🧹");
            }
            else
            {
                reject("You didn't clean the kitchen 🧹");
            }
        }, 2500);
    });
}

function takeOutTrash()
{
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {

            const tookOutTrash = true;

            if(tookOutTrash)
            {
                resolve("You took out the trash 🗑️");
            }
            else
            {
                reject("You didn't take out the trash 🗑️");
            }
        }, 1750);
    });
}

async function doChores() //async function returns a promise    MUST USE async WITH await, OTHERWISE GIVES YOU AN ERROR
{
    try //for catching the rejection statments
    {
        const walkDogResult = await walkDog(); //wait for this method to complete
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen(); //wait for this method to complete
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash(); //wait for this method to complete
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    }
    catch(error) //stops this program when error is recieved
    {
        console.error(error);
    }
}

doChores();
