// Dates

let myDate = new Date()
// console.log("toString:",myDate.toString());
// console.log("toDateString:",myDate.toDateString());
// console.log("toLocalString:",myDate.toLocaleString());
// console.log("type of Date:",typeof myDate); //=> object

let myCreatedDate = new Date(2002, 0, 28)
// console.log("toString:",myCreateDate.toString());
// console.log("toDateString:",myCreateDate.toDateString());
// console.log("toLocalString:",myCreateDate.toLocaleString());
// console.log("type of Date:",typeof myCreateDate); //=> object

// toString: Sun Dec 24 2023 13:29:31 GMT+0000(Coordinated Universal Time)
// toLocalString: 12/24/2023, 1:29:31 PM

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log("Date:",myCreatedDate1.getDate());
console.log("Day:",myCreatedDate1.getDay());
console.log("Hours:",myCreatedDate1.getHours());

let myCreatedDate2 = new Date("2023-01-14")
console.log("Date:",myCreatedDate2.getDate());
console.log("Day:",myCreatedDate2.getDay());

let myCreatedDate3 = new Date("01-14-2023")
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getDay());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.toLocaleString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`Todays Date is ${newDate.getDate()} and the Month is ${newDate.getMonth()+1} `)

newDate.toLocaleString('default', {
    weekday: "long",
})