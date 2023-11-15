import MeuComponente from "./components/MeuComponente"

function App() { //Primeiro componente da aplicação


  return (
    <div>

      <h1>Olá mundo, React!</h1>
      <MeuComponente/>

      <MeuBotao conteudo="me clique"/>

      <MeuBotao conteudo="depois aqui"/>

      <MeuBotao conteudo="e por fim aqui"/>
    </div> 
  )
}

function MeuBotao(props){ //é bom criar outros componentes em arquivos separados
  return(
    <button>{props.conteudo}</button> //pega o conteúdo escrito lá em cima
  )
}
export default App
