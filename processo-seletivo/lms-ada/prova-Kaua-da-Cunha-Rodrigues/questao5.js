/*
5. Soma dos Ímpares
Desenvolva uma função somaImpares que recebe um array de números inteiros e retorna a soma de todos os números ímpares no array.
*/

const numeros = [1, 2, 3, 4, 5, 6];
const soma = somaImpares(numeros);
console.log(soma);

function somaImpares(listaNumeros){
    let somaImpares = 0
    
    for(let valor of listaNumeros){
        if(valor % 2 == 1){
            somaImpares += valor
        }
    }
    return somaImpares
}