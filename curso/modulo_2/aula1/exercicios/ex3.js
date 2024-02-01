/*
    Crie um algoritmo que, dadas duas variáveis, valide se os seus valores são do number e então retorne a soma entre esses valores. Caso algum dos valores não for um número, faça a conversão deste.
    Se não for possível fazer a conversão, exiba uma mensagem de erro ao usuário.
*/

let valor1 = 25
let valor2 = "str" 

valor1 = Number(valor1)   
valor2 = Number(valor2)

if(isNaN(valor1) || isNaN(valor2)){
    console.log("Erro detectado")
}else{
    let soma = valor1 + valor2
    console.log(soma)
}

