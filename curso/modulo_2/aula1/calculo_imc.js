let peso = 58
let altura = 1.78

function calculoIMC(peso, altura){
    let imc = peso / (altura ^ 2)
    
    
    if(imc < 18.5){
        mensagem = " Você está abaixo do peso"
    }else if(imc < 25){
        mensagem = " Peso Ideal"
    }else if(imc < 30){
        mensagem = " Pré-Obesidade"
    }else if(imc < 35){
        mensagem = " Obesidade Grau 1"
    }else if(imc < 40){
        mensagem = " Obesidade Grau 2"
    }else{
        mensagem = " Obesidade Grau 3"
    }

    return mensagem
}

console.log(calculoIMC(peso, altura))