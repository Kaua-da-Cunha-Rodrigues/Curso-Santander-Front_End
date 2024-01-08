//se não passar o curso, o padrão é "Javascript"
function saudacao(nome, curso="Javascript"){ 
    console.log(`Olá ${nome}, seja bem-vindo(a) ao curso de ${curso}!`)
}

saudacao("Kauã")

//Enviar parâmetros
function soma(n1, n2){ 
    return n1 + n2
}

resultado = soma(7, 8)
console.log(resultado)

function maiorQue50(numero){
    if(numero > 50){
        return true
    }
    
    return false
}
