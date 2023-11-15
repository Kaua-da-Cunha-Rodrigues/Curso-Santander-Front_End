const input = require("readline-sync")

// const nota1 = Number(input.question("Informe a nota 1: "))
// const nota2= Number(input.question("Informe a nota 2: "))
// const nota3 = Number(input.question("Informe a nota 3: "))
let media = 0

for (let i = 1; i < 4; i++) {
    media += Number(input.question(`Diga a nota ${i} do aluno: `))
}
media = media / 3
console.log(media)