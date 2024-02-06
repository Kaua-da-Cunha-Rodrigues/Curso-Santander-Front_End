let alunos = [
    {nome: "Kauã", idade: 19, sexo: "Masculino"},
    {nome: "Maria", idade: 22, sexo: "Feminino"},
    {nome: "Eduardo", idade: 45, sexo: "Masculino"},
    {nome: "Carla", idade: 23, sexo: "Feminino"},
]

for(const aluno of alunos){
    console.log(aluno) //imprime as chaves e valores 
    console.log(aluno.nome) //imprime apenas o nome
}
for(const { nome, idade } of alunos){ //desestruturação
    console.log(`${nome} tem ${idade} anos`)
}