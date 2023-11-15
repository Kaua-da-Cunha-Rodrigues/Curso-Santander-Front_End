//Operadores Booleanos

/*
    igualdade: == (ou === mas é outra função)
    desigualdade: != (ou !== mas é outra função)
    maior que: >
    maior ou igual: >=
    menor que: <
    menor ou igual <=
*/
const numero = 10

console.log(numero > 10)
console.log(numero == 10)
console.log(numero === "10") //Não só o valor, mas o tipo da variável tem que ser igual

console.log(numero != 10)
console.log(numero != "10")
console.log(numero !== "10")

//Conjugações Lógicas

/*
    AND => &&
    OR => ||
    NOT => !
*/

let idade = 19
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH == true
console.log("Posso dirigir?", possoDirigir)