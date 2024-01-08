const numeros = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1, 10];

function removerNumerosRepetidos(lista){
    let novaLista = []
    for (let valor of lista){
        if(!novaLista.includes(valor)){
            novaLista.push(valor)
        }
    }
    return novaLista
}

console.log(removerNumerosRepetidos(numeros))