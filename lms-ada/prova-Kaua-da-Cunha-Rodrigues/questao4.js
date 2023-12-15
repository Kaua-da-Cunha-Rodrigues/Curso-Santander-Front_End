/*
Verificador de Palíndromos

Desenvolva uma função ehPalindromo que verifica se uma string é um palíndromo. Um palíndromo é uma palavra ou frase que é a mesma, quer seja lida da esquerda para a direita ou da direita para a esquerda, ignorando espaços, pontuações e capitalização. Por exemplo, ehPalindromo("Ana") deve retornar true.
*/

function ehPalindromo(palavra){

    const palavraLimpa = palavra.replace(/[\W_]/g, '') //tira espaços e pontuações

    let palavraDiminutiva = palavraLimpa.toLowerCase() //diminutivo

    let listaDeLetrasSeparadas = palavraDiminutiva.split("") //separa

    let listaReversa = listaDeLetrasSeparadas.reverse() //inverte
    let palavraReversa = listaReversa.join("") //junta


    if(palavraReversa == palavraDiminutiva){
        return true
    }else{
        return false
    }
}
console.log(ehPalindromo("Ovo"))