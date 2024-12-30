// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED (task completed successfully?)
//           new Promise((resolve, reject) => {asynchronous code})
//
// DO THESE CHORES IN ORDER
//
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

//--------------------CALLBACK HELL/PROBLEM--------------------

// function walkDog(callback)
// {
//     setTimeout(() => {
//         console.log("You walked the dog 🐕‍🦺");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback)
// {
//     setTimeout(() => {
//         console.log("You cleaned the kitchen 🧹");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback)
// {
//     setTimeout(() => {
//         console.log("You took out the trash 🗑️");
//         callback();
//     }, 1750);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You finished all the chores!"));
//     });
// });

//--------------------Promises--------------------


function walkDog()
{
    return new Promise( (resolve, reject) => { //we promise to return an object (aka do the code)
        setTimeout(() => {

            const dogWalked = false; //testing
            //const dogWalked = true; //testing

            if(dogWalked)
            {
                resolve("You walked the dog 🐕‍🦺"); //After we finish walking the dog, this is the completion message
            }
            else
            {
                reject("You didn't walk the dog"); //rejection message  (gives an error)
            }
        }, 1500);
    });
}

function cleanKitchen()
{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("You cleaned the kitchen 🧹");
        }, 2500);
    });
}

function takeOutTrash()
{
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            resolve("You took out the trash 🗑️");
        }, 1750);
    });
}

//Now all you need to do is this!

walkDog().then(value => console.log(value)); //returns the "You walked the dog 🐕‍🦺" string

walkDog().then(value => { //calls walkDog(), then cleanKitchen(), then takeOutTrash()
    console.log(value);
    return cleanKitchen();
}).then(value => {
    console.log(value);
    return takeOutTrash();
}).then(value => {
    console.log(value);
    console.log("You finished all the chores");
});

//or (easier readability)

walkDog().then(value => {console.log(value); return cleanKitchen();})
         .then(value => {console.log(value); return takeOutTrash();})
         .then(value => {console.log(value); console.log("You finished all the chores");})
         .catch(error => console.error(error)); //catch statment if promises through a rejection error, if the first promise is an error, all the rest don't run!
