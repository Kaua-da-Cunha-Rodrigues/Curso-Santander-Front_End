const numbers = [1, 2, 3, 4, 5]

// const even = number.every((num) => num % 2 ===0)
const checkEven = (num) => num % 2 === 0 //Apenas guardei a função linha em uma variável

const even = numbers.every(checkEven) //every: se todos os elementos cumprem o requisito, retorna true, senão false
console.log(even)