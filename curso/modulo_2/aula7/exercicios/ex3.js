const num = 5

function fatorial(n){
    if(n === 1){
        return 1;
    }

    return n * fatorial(n - 1) //recursividade
    //Nesse caso, é como se a multiplicação fosse feita de baixo pra cima, pois o primeiro "loop" n retorna nada, ele espera que o fatorial(n-1) seja concluido, e o segundo loop espera o terceiro e assim por diante até o valor chegar até 1 para retornar o primeiro valor válido (1) para a multiplicação. Ai sim ele multiplica de baixo pra cima
}

console.log(fatorial(num))