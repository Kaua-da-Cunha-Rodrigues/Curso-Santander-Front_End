
//Essa função não impede a execuçã do resto do código, portanto o que estiver escrito depois da chamada da função na linha 10, o código continuará rodando, então o "anotar outro pedido" virá antes do log dentro da função. É uma função assíncrona
const entregandoPedidoAoChefe = function(){
    setTimeout(() =>{
        console.log("Chefe falando: Pedido pronto pode vir buscar");
    }, 1000) //espera um segundo e retorna o log
}

console.log("Levei o pedido ao chefe");
entregandoPedidoAoChefe()
console.log("Anotar outro pedido");

/*Dica: Não use desse jeito

    somaAsync(a, b, (resultado1) =>{
            somaAsync(resultado1, 30, (resultadoFinal) =>{
                console.log(resultadoFinal)
            })
    })
*/
