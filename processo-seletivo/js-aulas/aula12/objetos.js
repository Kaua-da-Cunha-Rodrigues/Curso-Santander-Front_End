//Criar Objeto
let pessoa = {
    nome: "Kauã",
    idade: 18,
    altura: 1.78,
    "data-nascimento": "02/04/2004"
}

console.log(pessoa.nome)
console.log(pessoa["data-nascimento"])

//adicionar elementos

pessoa.peso = 68
console.log(pessoa)

//remover

delete pessoa.peso

//Percorrer objeto
for(let chave in pessoa){
    console.log(pessoa[chave])    
}