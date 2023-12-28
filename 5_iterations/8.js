
const myNumbers = [1,2,3]

// const myTotal = myNumbers.reduce(function(acc, currval)
// {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3) 

// const myTotal = myNumbers.reduce((acc, curr) => (acc+curr), 9)

// console.log(myTotal);




const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "python course",
        price: 599
    },
    {
        itemName: "cpp course",
        price: 1000
    },
    {
        itemName: "java course",
        price: 1299
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => {
    console.log(`acc: ${acc} and currval: ${item.price}`);
    return acc + item.price
}, 0)

console.log(priceToPay)