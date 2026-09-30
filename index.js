/*Promises = An object that manages asynchronous operations in JavaScript. It represents a value that may be available now, or in the future, or never. I can wrap a promise object around some asynchronous code. The promise object promises to return a value. That promise object will be pending(waiting); then either that promise is resolved if the task executed successfully, or rejected if it fails for some reason (maybe the promise to fetch a file wasn't possible). Promises have three states: pending, fulfilled, and rejected. They provide a cleaner way to handle asynchronous code compared to traditional callback functions, allowing for better readability and error handling.*/

/* In this demonstrattion, we are going to do the following chores in the house:
1. Clean the kitchen shall take us 2 'seconds' to complete (2000miliseconds)
2. Vacuum the living room (shall take us 3 'seconds' to complete)
3. Do the laundry (shall take us 4 'seconds' to complete)
4. Take out the trash (shall take us 1 'second' to complete)


Now take note that on a normal it takes different amount of time to complete the indicated chores to be completed respectively (However be the case we want the computer to present its execution in the order that we have placed them). We will create a promise for each chore to simulate asynchronous operations. Each promise will resolve after a certain amount of time to mimic the time taken to complete each task.

We will create a promise for each chore to simulate asynchronous operations. Each promise will resolve after a certain amount of time to mimic the time taken to complete each task. unlike callbacks, promises provide a more structured approach to handling asynchronous operations. 
in his case we shall be using return a new promise object following the formular of resolve and rejec
here our promiser or promise objec promises to return a value. it is either going to be resolved or rejected* we shall not use the callback parameter here*/

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("We are done cleaning the kitchen.");
            resolve();
        }, 4000);
    });
}
function vacuumLivingRoom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("We are done vacuuming the living room.");
            resolve();
        }, 2500);
    });
}
function doLaundry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("we are afterwards done with the laundry ");
            resolve();
        }, 9000);
    });
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("we have as the last in the order, taken out the trash");
            resolve();
        }, 500);
    });
}

cleanKitchen().then((message) => {
    console.log(message);
    return vacuumLivingRoom();
}).then((message) => {
    console.log(message);
    return doLaundry();
}).then((message) => {
    console.log(message);
    return takeOutTrash();
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("An error occurred:", error);
}); 