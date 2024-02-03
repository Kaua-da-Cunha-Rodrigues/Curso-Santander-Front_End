/*
    Crie um algoritmo que receba os três lados de um triângulo e imprime "Equilátero" se todos os lados forem iguais, "Isósceles" se dois lados forem iguais, ou "Escaleno" se todos os lados forem diferentes.
*/

const lado1 = 4
const lado2 = 3
const lado3 = 5

if(lado1 == lado2 && lado2 == lado3){
    console.log("Equilátero")
}else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
    console.log("Escaleno")
}else{
    console.log('isósceles')
}