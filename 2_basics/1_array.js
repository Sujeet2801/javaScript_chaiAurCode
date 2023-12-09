
// ******************** Array ***************************//

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);

// ******************** Array methods *********************//

myArr.push(6)
myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// ***************** slice, splice ***************************//

console.log("Original Array: ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("Slice: ",myn1);
console.log("Sliced Array: ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("Splice", myn2);
console.log("Splice Array: ", myArr);