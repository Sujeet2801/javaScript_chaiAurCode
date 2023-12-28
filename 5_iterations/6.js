const coding = ["java", "js", "python", "ruby"]

const values = coding.forEach((element) => {
    // console.log(element);
    return element;
});

// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNum.filter((num) => num > 4)

const newNums = myNum.filter((num) => {
    return (num > 4);
})

// console.log(newNums);

const newNum = []

myNum.forEach((item) => {
    if (item > 6) {
        newNum.push(item)
    }
})

// console.log(newNum);


const books = [
    {title: "book one", genre: "fiction", publish: "1981", edition: "2004"},
    { title: "book two", genre: "science", publish: "1985", edition: "2005" },
    { title: "book three", genre: "history", publish: "1988", edition: "2004", },
    { title: "book four", genre: "fiction", publish: "1981", edition: "2006", },
    { title: "book five", genre: "science", publish: "1985", edition: "2004", },
    { title: "book six", genre: "non-fiction", publish: "1981", edition: "2002" },
    { title: "book seven", genre: "fiction", publish: "1988", edition: "2005" },
    { title: "book eight", genre: "science", publish: "1981", edition: "2004" },
    { title: "book nine", genre: "history", publish: "1999", edition: "2004" },
    { title: "book ten", genre: "non-fiction", publish: "1936", edition: "2001" }
]

const user = books.filter((bk) => {
    return bk.publish === '1981'
})
// console.log(user);

const arr1 = []

books.forEach((item) => {
    if(item.genre === "history"){
        arr1.push(item.publish);
    }
})

console.log(arr1);