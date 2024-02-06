let alunos = [
    {nome: "Kauã", idade: 19, sexo: "Masculino"},
    {nome: "Maria", idade: 22, sexo: "Feminino"},
    {nome: "Eduardo", idade: 45, sexo: "Masculino"},
    {nome: "Carla", idade: 23, sexo: "Feminino"},
]
let aluno = alunos[0]

console.log(aluno.nome) //imprime o valor

for(const key in alunos){
    console.log(key) //imprime o índice, pois é a variável alunos é uma lista
    console.log(`${alunos[key].nome} tem ${alunos[key].idade} anos`) //imprime os valores
}

for(const chave in aluno){
    console.log(chave) //imprime as chaves
    console.log(aluno[chave]) //imprime os valores
}