/* this page  explains callbacks 
/* In this demonstrattion, we are going to do the following chores in the house:
1. Clean the kitchen shall take us 2 'seconds' to complete (2000miliseconds)
2. Vacuum the living room (shall take us 3 'seconds' to complete)
3. Do the laundry (shall take us 4 'seconds' to complete)
4. Take out the trash (shall take us 1 'second' to complete)

Now take note that on a normal it takes different amount of time to complete the indicated chores to be completed respectively (However be the case we want the computer to present its execution in the order that we have placed them). */

/*
function cleanKitchen() {
    setTimeout(() => {
        console.log("We are done cleaning the kitchen.");
    }, 2000);
}
function vacuumLivingRoom() {
    setTimeout(() => {
        console.log(" We are done vacuuming the living room.");
    }, 3000);
}
function doLaundry() {
    setTimeout(() => {
        console.log("we are afterwards done with the laundry ");
    }, 4000);
}
function takeOutTrash() {
    setTimeout(() => {
        console.log("we have as the last in the order, taken out the trash"); 
    }, 1000);
}
    */

/* Now we will call the functions in the order we want them to be executed. However, since they are asynchronous, they will not execute in the order we want them to. We will use callbacks to ensure that each function is called after the previous one has completed. And so after cleaning the Kitchen, we will call a calback  to vacuumLivingRoom. After we vacuum the living room, we will call a callback to doLaundry. Finally, we will call a callback to takeOutTrash. Therefore, we are going to modify our functions so that they accept callbacks as parameters */

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("We are done cleaning the kitchen.");
        if (callback) callback();
    }, 4000);
}
function vacuumLivingRoom(callback) {
    setTimeout(() => {
        console.log("```We are done vacuuming the living room.");
        if (callback) callback();
    }, 2500);
}
function doLaundry(callback) {
    setTimeout(() => {
        console.log("we are afterwards done with the laundry ");
        if (callback) callback();
    }, 9000);
}
function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("we have as the last in the order, taken out the trash");
        if (callback) callback();
    }, 500);
}
/* now if we want to call all  these functions in order, we will have to use nested callbacks. This is known as "callback hell" and can make the code difficult to read and maintain. However, we will do it this way for demonstration purposes.  so first we will like to clean the kitchen; pass in a call back(we shall use the arrow function); then we will call the next function with a callback, and so on. */ 

cleanKitchen((() => {
    vacuumLivingRoom(() => {
        doLaundry(() => {
            takeOutTrash(() => {
                console.log("We have cmpleted all the indicated chores in the order instructed us to do so. We have cleaned the kitchen, vacuumed the living room, done the laundry, and taken out the trash.");
            })
        })
    })
})
)
