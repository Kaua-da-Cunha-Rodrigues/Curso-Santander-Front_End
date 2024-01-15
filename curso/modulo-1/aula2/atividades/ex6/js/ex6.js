/*
    1 - Encontrar os botões no html e armazená-los

    2- Identificar quando o botão é clicado

    3- SE o elemento do botão estiver "none", passar para block e vice-versa

    4- Repetir o processo para todos os botões
*/

let botoes = document.querySelectorAll(".botao") //Pego os botões

//para cada botao ele adiciona um evento de click e coleta o indice desse botao
botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () => {

        let listaCardapio

        //de acordo com o índice, ele pega uma lista diferente, referente a cada membro da família
        switch (indice) {
            case 0:
                listaCardapio = document.querySelectorAll(".pratos_pai")    
            break;
        
            case 1:
                listaCardapio = document.querySelectorAll(".pratos_mae") 
            break;

            case 2:
                listaCardapio = document.querySelectorAll(".pratos_filho") 
            break

            case 3:
                listaCardapio = document.querySelectorAll(".pratos_filha") 
            break
        }

        //Para cada elemento dessa lista, ele verifica o estado do display e o altera
        listaCardapio.forEach(function(elemento){
            if(elemento.style.display === "none" || elemento.style.display === ""){
                elemento.style.display = "block"
            }else{
                elemento.style.display = "none"
            }
        })
    })
})
