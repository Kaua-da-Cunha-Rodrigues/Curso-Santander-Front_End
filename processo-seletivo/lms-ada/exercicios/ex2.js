const tarefas = ["Estudar", "Fazer compras", "Limpar a casa", "Fazer exercícios"];

function primeiraPalavra(array){
    return array.shift();
}
console.log(primeiraPalavra(tarefas))