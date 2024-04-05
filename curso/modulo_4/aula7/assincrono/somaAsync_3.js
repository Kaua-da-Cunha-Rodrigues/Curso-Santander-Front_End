//async/await - só funciona quando a função dentro dela retorna uma promise

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

async function calcularAsync(){
    try{
        console.log("Invocando as somas com await");
        const result1 = await somarAsyncPromise(1, 2) //await espera a função "somarAsyncPromise" rodar
        const result2 = await (result1, 3)
        console.log(result2)

    }catch{
        console.log(error.message);
    }
}

console.log("Antes de calcular");
calcularAsync()
console.log("Depois de calcular");