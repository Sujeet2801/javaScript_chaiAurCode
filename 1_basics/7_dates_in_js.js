// Dates

let myDate = new Date()
// console.log("toString:",myDate.toString());
// console.log("toDateString:",myDate.toDateString());
// console.log("toLocalString:",myDate.toLocaleString());
// console.log("type of Date:",typeof myDate); //=> object

let myCreatedDate = new Date(2002, 0, 28)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toJSON());
// console.log(myCreatedDate.toISOString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getDay());

let myCreatedDate2 = new Date("2023-01-14")
let myCreatedDate3 = new Date("01-14-2023")

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.toLocaleString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(`Todays Date is ${newDate.getDate()} and the Month is ${newDate.getMonth()+1} `)

newDate.toLocaleString('default', {
    weekday: "long",
})