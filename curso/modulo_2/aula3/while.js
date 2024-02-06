let alunos = [
    {nome: "Kauã", idade: 19, sexo: "Masculino"},
    {nome: "Maria", idade: 22, sexo: "Feminino"},
    {nome: "Eduardo", idade: 45, sexo: "Masculino"},
    {nome: "Carla", idade: 23, sexo: "Feminino"},
]

let i = 0

while(i < alunos.length){
    console.log(`${alunos[i].nome} tem ${alunos[i].idade} anos`)
    i++
}