import {useState} from "react"
import styles from "./button.module.css"

export default function MeuContador(){
    
    const [contador, setContador] = useState(0) //isso é uma função hook de use State

    function aumentar(){
        setContador(contador + 1) //incrementa contador
    }

    function diminuir(){
        setContador(contador -1)
    }

    if(contador > 5){
        return(
            <div>
                <h1>Contador maior que 5</h1>
                <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
                <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
            </div>
        )   
    }

    return(
        // Esse é o jeito mais parecido com css. Declara uma classe e cria um style.css para estilizar
        <div className="container"> 
            <h1>Meu Contador</h1>
            {/* {contador > 9 ? <h1>Valor muito alto</h1> : null} Se maior que nove, adiciona o h1, se não é null. Renderização condicional*/}
            <h3>{contador}</h3>
            <button  className={styles.myButton} onClick={aumentar}>aumentar</button>
            <button  className={styles.myButton} onClick={diminuir}>diminuir</button>
            {/* Esse jeito de aplicar estilos com o className necessita de um arquivo próprio com nome .module */}
        </div>
    )
}
