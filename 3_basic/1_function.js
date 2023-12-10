
/*********************************** Function *****************************/

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}
// sayMyName()

function addTwoNumber(number1, number2){ // parameters here
    console.log(number1 + number2);
}

// We pass arguments here
// addTwoNumber(4, "a")
// const result = addTwoNumber(4,5) 
// console.log("Result: ", result);

function addTwoNumber1(number3 , number4){
    return(number3 + number4)
}

const result1 = addTwoNumber1(5,6);
// console.log("Result1:", result1);

function loginUser(username){
    if(username === undefined){
        return ("Please Enter Username");
    }
    return `${username} just logged in`;
}

const res = loginUser("Sujeet");
// console.log(res);

// console.log(loginUser("Sujeet"));
// console.log(loginUser()); // undefined 

/************************** Fuction with objects ***********************/

function calculateCartPrice(...num1){
    return num1;
}

function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice1(200, 400, 500, 800, 20000))

const user = {
    username: "Sujeet",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);