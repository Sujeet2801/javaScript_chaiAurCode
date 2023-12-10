
const user = {
    username: "Sujeet",
    email: "sujeet@gmail.com",

    welcome: function(){
        console.log(this)
        return (`${this.username}, welcome to my website `);
    }
}

// console.log(user.welcome());
// console.log(this);

// function chai() {
//     username: "Sujeet"
//     console.log(this.username); // => undefined
    // We can not use this in this function 
// }

// const chai = function(){
//     username: "Sujeet"
//     console.log(this.username);
// }

/************************ Arrow Function *******************************/

// const chai = () => {
//     username: "Sujeet"
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return
// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => {username: "sujeet"}
const addTwo = (num1, num2) => ({username: "sujeet"})

console.log(addTwo(5,7));

