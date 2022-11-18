// let pushButton = document.querySelector('#push-button');
// let displayButton = document.querySelector("#display-button");
// let information = [];


// //Push button
// pushButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     let formInput = document.querySelector("#form-input").value;
//     information.push(formInput);
// });

// //Display
// displayButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     formInput= "";
//     console.clear();
//     console.table(information);
    
// });

let btnPush = document.querySelector('#push-button');
let btnDisplay = document.querySelector('#display-button');
//Empty array
let users = [];
//Implementation

// function push(e) {
//     e.preventDefault();
// }
btnPush.addEventListener('click', (e)=>{
    e.preventDefault();
    //Fetch the value from the input element
    let firstName = document.querySelector('#firstName');
    //Load name in to an array 
    users.push(firstName.value);
    firstName.value = "";
});

//Display
btnDisplay.addEventListener('click', (e)=>{
    e.preventDefault();
    console.clear();
    console.table(users);
    document.querySelector('#firstName').focus();
});
