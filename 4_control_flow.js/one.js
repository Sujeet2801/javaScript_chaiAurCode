// if
const isUserLoggedIn = true;

if(isUserLoggedIn){
    // console.log("User logged in");
}

if (2 === '2') {
    // console.log("Executed");
}

const score = 200;

if (score > 100) {
    const power = "fly"
    // console.log(`User's power : ${power}`);
}
// console.log(`User's power : ${power}`);

const balance = 1000;

// not the best way to write code
// if(balance > 500) console.log("test"),console.log("test2");;


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}