const numbers = [1,2,3,4,5]

const even = numbers.find((num) => num % 2 === 0)
console.log(even) //retorna 2 

const words = ["apple","banana","cherry"]
const longEnough = words.find((word) => word.length >= 6)
console.log(longEnough) //retorna banana
