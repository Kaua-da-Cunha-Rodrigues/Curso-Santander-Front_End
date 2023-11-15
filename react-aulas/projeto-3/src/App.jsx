import { useEffect } from "react";
import MinhaLista from "./components/MinhaLista";
import { useState } from "react";

const minhaLista2 =[
  { id: "1", value: "Fruta"},
  { id: "2", value: "Legume"},
  { id: "3", value: "Carne"},
] //lista do jeito correto

export default function App() {
  
  const [produtos, setProdutos] = useState(minhaLista2)
  const [pesquisa, setPesquisa] = useState("")

  useEffect(
    () => {
      if(pesquisa){
        const novaLista = minhaLista2.filter( (item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase()) //Verifica se o valor digitado na pesquisa, está incluido na lista para então filtrar o conteúdo
        })
        setProdutos(novaLista) 
      }else{
        setProdutos(minhaLista2)  //Se pesquisa for nulo, segue a lista normal
      }
    } 
    , [pesquisa] //Segundo parâmentro de useEffect: Executa o efeito toda vez que pesquisa é alterado
  ) //Toda vez que se renderiza o componente, executa esse efeito

  return (
    <div>
      <h1>Listas no React</h1>
      <MinhaLista/>

      <h2>Aula 7: Efeitos Colaterais</h2>
      <input 
        value={pesquisa} //O valor vem do useState
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquise aqui" 
       />
      {produtos.map((item) => {
        return(
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div> 
  )
}


