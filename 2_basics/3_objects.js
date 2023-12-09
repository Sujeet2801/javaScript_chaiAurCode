// singleton
// Object.create

//****************** object literals *****************//

const mySym = Symbol("key1")

const JsUser = {
    name: "Sujeet",
    "Full name": "Sujeet Kumar Gupta",
    [mySym]: "mykey1",
    age: 22,
    location: "Ghaziabad",
    email: "Sujeet@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof mySym);

JsUser.email = "sujeet@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sujeet@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingName = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingName());