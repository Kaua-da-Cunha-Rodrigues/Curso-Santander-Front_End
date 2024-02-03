//Jeitos de Conversão para Number

const num  = "125a3"

const num1 = Number(num)
console.log(num1) //Consideram que não é um número

const num2 = parseInt(num)
console.log(num2) //Ele considera todos os números e para na primeira letra

const num3 = parseFloat(num)
console.log(num3) //Ele considera todos os números e para na primeira letra

const num4 = +num
console.log(num4) //Consideram que não é um número


//Para string

const lightSpeed = 0
console.log(lightSpeed) 

console.log(lightSpeed?.toString()) //o ? verifica se o valor é null ou undefined

console.log("" + lightSpeed) //conversão implícita

console.log(JSON.stringify(lightSpeed))

console.log(lightSpeed || "or")//se for nulo ou undefined, imprime or

console.log(lightSpeed ?? "coalescencia") //se for nulo ou undefined, imprime coalescencia. Porem ele considera 0 e "" como valores definidos, o "or" não

//Objeto em string

const obj = {a: 1, b:2}
console.log(obj.toString())
console.log(JSON,stringify(obj))

// Para Boolean

const numero = 0
console.log(!numero) //retorna true
console.log(!!numero) //retorna false

const numero2 = {} //ele considera o objeto vazio como 0
console.log(!numero2);