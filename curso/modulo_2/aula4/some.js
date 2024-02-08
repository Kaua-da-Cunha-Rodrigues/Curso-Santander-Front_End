const numbers = [1,2,3,4,5]

const even = numbers.some((num) => num % 2 === 0)
console.log(even)

const words = ["apple","banana","cherry"]
const longEnough = words.some((word) => word.length >= 6)
console.log(longEnough)