const texto = "Este texto será impresso"

class Mensagem{
    texto = "Não este"
    exibir(){
        console.log(texto) //imprime o texto que está fora da class
        console.log(this.texto) //imprime o texto, atributo da class
    }

}

let mensagem = new Mensagem()

mensagem.exibir()