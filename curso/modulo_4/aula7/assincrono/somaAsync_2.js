//promise

function somarAsyncPromise(a, b){
    //resolve é quando a função da certo, e  reject qunado a função da errada
    return new Promise((resolve, reject) =>{
        try{
            if(isNaN(a) || isNaN(b)){
                throw new Error("Os valores não são números")
            }

            const resultado = a + b
            resolve(resultado)
        }catch (error){
            reject(error.message)
        }
    })
}

console.log("Antes de chamar a somarAsyncPromise");

const resultadoSomaPromise = somarAsyncPromise(10, 20) // 30
//then só roda quando é "resolve"
//os três "then" vão rodar
.then((result) =>{
    return somarAsyncPromise(result, 30) //30 + 30 = 60
})
.then((result) =>{
    return somarAsyncPromise(result, 20) // 60 + 20 = 80
})
.then((result) =>{
    console.log(result); //imprime 80
})
//catch só roda quando é "reject"
.catch((erro) =>{
    console.log(erro);
})
//finally rodará sempre
.finally((finallyResultado) =>{
    console.log("Sempre caio aqui");
})

console.log("Depois de chamar a somarAsyncPromise");