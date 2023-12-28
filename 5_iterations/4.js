const myObject1 = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject1) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myObject1[key]}`);
}

const programming = ["js", "cpp", "c", "ruby", "java"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map() // stores unique value
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}