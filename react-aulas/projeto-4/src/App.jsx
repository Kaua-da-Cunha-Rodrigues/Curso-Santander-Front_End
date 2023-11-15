import { useState } from "react"
import { useEffect } from "react"

const tarefas = [
  { id: "1"  , title: "Primeira Tarefa"} ,
  { id: "2"  , title: "Segunda Tarefa"} ,
  { id: "3"  , title: "Terceira Tarefa"} ,
  { id: "4"  , title: "Quarta Tarefa"} ,
]

export default function App() {

  const[tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados(){
      const resultado = await fetch("https://jsonplaceholder.typicode.com/todos")
      const resultadoFinal = await resultado.json()  //função assincrona que faz o parse da resposta

      return resultadoFinal
    }

    buscarDados().then(res => setTarefas(res))

  } ,[])

  return (
    <div>
      <h1>Buscando Dados</h1>
      <ol>

        {tarefas.map((tarefa) => {
          return(
            <div>
              <li key={tarefa.id}>
                {tarefa.title}
                - {tarefa.completed ? <span>Tarefa Concluída</span> : null}
              </li>
            </div>
          )
        })}

      </ol>
    </div>  
  )
}
