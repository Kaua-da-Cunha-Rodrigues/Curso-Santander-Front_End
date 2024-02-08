const numbers = [3,1,4,1,5,6,9, 10]

numbers.sort() //ordena crencentemente, porém buga em 10, 20, 100, etc

console.log(numbers)

console.log(numbers.sort((a,b) => b - a)) //ordem descrencente
console.log(numbers.sort((a,b) => a - b)) //ordem crencente

const nomes = ["Zilda","Pedro","Tiago","Bruno", "Amaro", "Álvaro"]
console.log(nomes.sort((a,b) => a.localeCompare(b))) //Sem o localeCompare, ele considera o Á de Álvaro como caractere especial e o deixa por último

const listaDeAlunos = [
    { nome: "João", notas: [8, 7] },
    { nome: "Maria", notas: [9, 8] },
    { nome: "Carlos", notas: [6, 5] },
    { nome: "Ana", notas: [7, 6] },
    { nome: "Álvaro", notas: [10, 9] },
    { nome: "Lúcia", notas: [8, 7] },
    { nome: "Fernando", notas: [7, 6] },
    { nome: "Camila", notas: [9, 8] },
    { nome: "Rafael", notas: [6, 5] },
    { nome: "Juliana", notas: [10, 9] },
];
console.log(listaDeAlunos.sort((a, b) => a.nome.localeCompare(b.nome))) //como é um objeto, precisamos rondar pelos atributos do objeto para ordená-los