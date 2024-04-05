//callback

function somarAsync(a, b, callback){
    setTimeout(() =>{
        const soma = a + b
        callback(soma) //chama a função minhaFuncaoCallback e define o parâmetro "resultado" com o valor de soma da linha acima
    }, 2000)
}

function minhaFuncaoCallback(resultado){
    console.log(resultado);
}

somarAsync(1, 2, minhaFuncaoCallback) //o minhaFuncaoCallback não tem parâmetro, porque o parâmetro é definido dentro da função somarAsync

