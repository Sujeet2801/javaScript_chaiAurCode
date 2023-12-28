
const coding = ["cpp", "java", "js", "ruby", "python"]

coding.forEach( function (item){
    // console.log(item);
})

// Arrow function
coding.forEach((item) => {
    // console.log(item);
})


function printMe (item) {
    console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.table([item, index, arr])
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "java",
        languageFileName: "js"
    },
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})