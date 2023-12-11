const userEmail = []

if (userEmail) {
    // console.log("Got user email");
}else{
    // console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined , NaN

// truthy values
// "0", 'false', " ", {}, [], function(){}

if (userEmail.length === 0) {
    // console.log("Array is empty");
}

const emptObject = {}

if (Object.keys(emptObject).length === 0) {
    // console.log("Object is empty");
}

/****** On browser *****/
// false == 0 => true
// false == '' => true
// 0 == '' => true


/******Nullish Colaescint Operator(??): null undefined *****/

let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 20;
val = null ?? 11 ?? 20;

// console.log(val);

/************* Terniary Operator ******************/

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");