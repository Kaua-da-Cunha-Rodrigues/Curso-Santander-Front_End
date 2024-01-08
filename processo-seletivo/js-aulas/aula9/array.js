let arr = [] //criou array vazio
let dados = ["Kauã", 18, 1.78, 68]

console.log("Primeiro elemento:", dados[0])
console.log("Segundo elemento:", dados[1])

console.log("Tamanho do array", dados.length)

//Percorrer array
for(i = 0; i < dados.length; i++){
    console.log("Dado", i, " do array", dados[i])
}

//Segundo jeito (percorre os elementos)
for (let elemento of dados){
    console.log(elemento);
}

//Terceiro jeito (percorre os índices)
for(let indice in dados){
    console.log(variavel)
}