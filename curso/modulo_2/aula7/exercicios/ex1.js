/*
    Escreva uma função para calcular o fatorial de um número.
    Ex: n * (n-1) * (n-2) *...*1
*/

function Calculofatorial(numero){
    let fatorial = numero

    if(numero === 0){
       return console.log("Fatorial de 0 é igual a: 1")
    }
    while(numero != 1){
        fatorial *= numero - 1
        numero -= 1
    }
    return console.log("Seu fatorial tem resultado: " ,fatorial)
}

Calculofatorial(5)