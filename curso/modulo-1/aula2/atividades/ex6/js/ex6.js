/*
    1 - Encontrar os botões no html e armazená-los

    2- Identificar quando o botão é clicado

    3- SE o elemento do botão estiver "none", passar para block e vice-versa

    4- Repetir o processo para todos os botões
*/

// let botao_pai = document.getElementById("botao_pai")
// let pratos_pai = document.querySelectorAll(".pratos_pai").value


// console.log(pratos_pai)

// botao_pai.addEventListener("click", () => {
//     if(valorDisplay == "none"){
//         pratos_pai.setAttribute("display", "block")
//     }else{
//         pratos_pai.setAttribute("display", "none")
//     }
// })

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
