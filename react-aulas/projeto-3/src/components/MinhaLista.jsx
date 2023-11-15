const minhaLista =[
    { id: "1", value: "Fruta"},
    { id: "2", value: "Legume"},
    { id: "3", value: "Carne"},
] //lista do jeito correto

export default function MinhaLista(){

    // const minhaLista = [
    //     <h4 key="1">Item 1</h4> ,   
    //     <h4 key="2">Item 2</h4> ,   
    //     <h4 key="3">Item 3</h4> ,    
    //     <h4 key="4">Item 4</h4> ,   
    //     <h4 key="5">Item 5</h4> ,   
    //     <h4 key="6">Item 5</h4>    
    // ] Utilizar assim não é mt comum
    //React pede as keys


    return minhaLista.map( (item) => {
        return (
             <div key={item.id}> {/*sempre adicione as keys*/}
                <h4>{item.value}</h4>    
            </div>
        )
    }) //Aplica essa função pra cada item da lista
}