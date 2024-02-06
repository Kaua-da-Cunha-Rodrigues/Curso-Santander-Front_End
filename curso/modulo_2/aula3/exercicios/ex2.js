/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos), que contém nome, nota1 e nota2. Use o for para percorer esse array e calcular a média das duas notas de cada aluno. Ao final, imprimir o nome do aluno e a sua média
*/
const listaDeAlunos = [
    { nome: "João", notas: [8, 7] },
    { nome: "Maria", notas: [9, 8] },
    { nome: "Carlos", notas: [6, 5] },
    { nome: "Ana", notas: [7, 6] },
    { nome: "Pedro", notas: [10, 9] },
    { nome: "Lúcia", notas: [8, 7] },
    { nome: "Fernando", notas: [7, 6] },
    { nome: "Camila", notas: [9, 8] },
    { nome: "Rafael", notas: [6, 5] },
    { nome: "Juliana", notas: [10, 9] },
];

let notaAluno = 0
let mediaAluno
let indiceDivisao = 0
for(const {nome, notas} of listaDeAlunos){
    for(let i = 0; i < notas.length; i++){
        notaAluno += notas[i]
        indiceDivisao++
    }
    mediaAluno = notaAluno / indiceDivisao
    console.log(`O aluno ${nome} teve média de: ${mediaAluno}`)
    notaAluno = 0
    indiceDivisao = 0
}