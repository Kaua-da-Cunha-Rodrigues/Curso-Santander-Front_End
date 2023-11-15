let input = require("readline-sync")
const sorteado = 20
let numero = Number(input.question("Qual numero voce escolhe?"))


while(numero !== sorteado){
    numero = Number(input.question("Qual numero voce escolhe?"))
    if (numero == sorteado){
        console.log("Voceacertou!")
    }else{
        console.log("Numero errado, tente novamente")
    }
}