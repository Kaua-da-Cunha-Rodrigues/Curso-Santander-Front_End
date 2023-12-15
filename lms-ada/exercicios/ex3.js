function organizarTarefas(array){
	return array.sort((a, b) => a.prioridade - b.prioridade);
}

const tarefas = [
  { nome: "Estudar para a prova", prioridade: 3 },
  { nome: "Fazer compras", prioridade: 5 },
  { nome: "Preparar apresentação", prioridade: 2 },
  { nome: "Limpar a casa", prioridade: 4 },
  { nome: "Resolver pendências no trabalho", prioridade: 1 },
];

console.log(organizarTarefas(tarefas))